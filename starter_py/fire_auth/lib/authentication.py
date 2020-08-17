import firebase_admin
from django.contrib.auth.models import User
from django.utils import timezone
from firebase_admin import credentials, auth
from rest_framework import authentication

from config.settings import BASE_DIR, ENV_TYPE
from fire_auth.lib.exceptions import NoAuthToken, InvalidAuthToken, FirebaseError

cred = credentials.Certificate(f'{BASE_DIR}/fire_auth/keys/firebase_credentials_{ENV_TYPE.lower()}.json')
default_app = firebase_admin.initialize_app(cred)


class FirebaseAuthentication(authentication.BaseAuthentication):

    def authenticate(self, request):
        auth_header = request.META.get("HTTP_AUTHORIZATION")
        if not auth_header:
            raise NoAuthToken("No auth token provided")

        id_token = auth_header.split(" ").pop()
        try:
            decoded_token = auth.verify_id_token(id_token)
        except Exception:
            raise InvalidAuthToken("Invalid auth token")

        if not id_token or not decoded_token:
            return None

        try:
            uid = decoded_token.get("uid")
        except Exception:
            raise FirebaseError()

        user, created = User.objects.get_or_create(username=uid)
        user.profile.last_activity = timezone.localtime()

        return user, None

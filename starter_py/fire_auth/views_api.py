from rest_framework.response import Response
from rest_framework.views import APIView

from fire_auth.lib.authentication import FirebaseAuthentication


class LoginView(APIView):
    authentication_classes = []  # FirebaseAuthentication]

    def get(self, request, format=None):
        return Response({'test': True})

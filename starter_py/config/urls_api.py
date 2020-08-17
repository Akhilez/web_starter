from django.urls import path
from fire_auth import views_api

app_name = 'config'

urlpatterns = [
    path('login/', views_api.LoginView.as_view(), name='login')
]

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from authentication.models import User


class AuthenticationTests(APITestCase):
    def test_register_user(self):
        url = '/authentication/register/'
        data = {'username': 'test',
                'first_name': 'Test',
                'last_name': 'Test',
                'password': 'test'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().is_active, True)
        self.assertEqual(User.objects.get().is_staff, False)

    def test_login_and_logout_user(self):
        url = '/authentication/register/'
        data = {'username': 'test',
                'first_name': 'Test',
                'last_name': 'Test',
                'password': 'test'}
        register = self.client.post(url, data, format='json')
        
        url = '/authentication/login/'
        data = {'username': 'test',
                'password': 'test'}
        login = self.client.post(url, data, format='json')
        self.assertEqual(login.status_code, status.HTTP_200_OK)

        url = '/authentication/logout/'
        data = {}
        logout = self.client.post(url, data, format='json')
        self.assertEqual(logout.status_code, status.HTTP_204_NO_CONTENT)

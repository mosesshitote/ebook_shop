from django.contrib.auth import authenticate, login, logout
from rest_framework import views, viewsets, response, status, permissions, mixins
from rest_framework.authtoken.models import Token

from .models import User
from .serializers import UserSerializer, TokenSerializer


class LoginView(views.APIView):
    def post(self, request, format=None):
        data = request.data

        username = data.get('username', None)
        password = data.get('password', None)

        user = authenticate(username=username, password=password)

        if user is not None and user.is_active:
            login(request, user)

            token = Token.objects.get_or_create(user=user)

            serialized = TokenSerializer(token[0])

            return response.Response(serialized.data)

        else:
            return response.Response({
                'status': 'Unauthorized',
                'message': 'Username/password combination invalid.'
            }, status=status.HTTP_401_UNAUTHORIZED)


class RegisterView(views.APIView, mixins.CreateModelMixin):
    serializer_class = UserSerializer

    def post(self, request, format=None):
        return self.create(request, format=format)

    def get_serializer(self, data, **kwargs):
        return self.serializer_class(data=data, **kwargs)


class LogoutView(views.APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        logout(request)

        return response.Response({}, status=status.HTTP_204_NO_CONTENT)

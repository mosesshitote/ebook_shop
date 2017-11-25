from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

    def __repr__(self):
        return "{self.first_name} {self.last_name} - User"

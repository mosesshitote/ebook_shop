from django.db import models
from django.contrib.auth import get_user_model
from django.conf import settings


class Review(models.Model):
    created_by = models.ForeignKey(get_user_model())
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()
    object_review = models.ManyToManyField(models.get_model(*settings.REVIEW_MODEL.split('.'))


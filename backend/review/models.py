from django.db import models
from django.apps import apps as django_apps
from django.contrib.auth import get_user_model
from django.conf import settings


class Review(models.Model):
    created_by = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()
    object_review = models.ForeignKey(django_apps.get_model(settings.REVIEW_MODEL, require_ready=False), null=True, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return 'Review Id: {id} - "{content}..." {first_name} {last_name}'.format(id=self.pk, content=self.content[:20], first_name=self.created_by.first_name, last_name=self.created_by.last_name)


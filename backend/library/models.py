import uuid
from datetime import datetime, timedelta

from django.db import models
from django.utils import timezone
from django.conf import settings
from django.contrib.auth import get_user_model


class BaseModel(models.Model):
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        abstract = True


class Author(BaseModel):
    first_name = models.CharField(max_length=256)
    last_name = models.CharField(max_length=128)

    def __str__(self):
        return "Author Id: {id} - {first_name} {last_name}".format(id=self.pk, first_name=self.first_name, last_name=self.last_name)


class Ebook(BaseModel):
    name = models.CharField(max_length=1024)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    isbn = models.CharField(max_length=64)
    description = models.TextField()
    image = models.ImageField(blank=True, upload_to=settings.IMAGE_ROOT)
    epub = models.FileField()

    @property
    def image_url(self):
        return self.image.url

    def __str__(self):
        return 'Ebook Id: {id} - {first_name} {last_name} "{name}"'.format(id=self.pk, 
                first_name=self.author.first_name, last_name=self.author.last_name, name=self.name)


def one_month_later_than_now():
    return timezone.make_aware(datetime.now() + timedelta(days=30))
 

class Loan(BaseModel):
    ebook = models.ForeignKey(Ebook, on_delete=models.CASCADE)
    client = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    expired_at = models.DateTimeField(default=one_month_later_than_now)
    # TODO: Is uuid4 is safe key?
    uuid_key = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return 'Loan - {first_name} {last_name} - "{ebook_name}"'.format(first_name=self.client.first_name, last_name=self.client.last_name, ebook_name=self.ebook.name)


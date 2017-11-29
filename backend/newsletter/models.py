from django.db import models


class Newsletter(models.Model):
    name = models.CharField(max_length=256)
    subject = models.CharField(max_length=78)
    content = models.TextField()


class Subscriber(models.Model):
    email = models.EmailField(unique=True)


class MailingRequest(models.Model):
    newsletter = models.ForeignKey(Newsletter)
    subscribers = models.ManyToManyField(Subscriber)
    send_time = models.DateTimeField(auto_now=True)

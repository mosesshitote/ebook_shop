from django.db import models
from django.conf import settings
from django.core.exceptions import ValidationError
from django.core.mail import send_mail

class Newsletter(models.Model):
    name = models.CharField(max_length=256)
    subject = models.CharField(max_length=78)
    content = models.TextField()

    def __str__(self):
        return "Newsletter Id: {id} - {subject}".format(id=self.pk, subject=self.subject)


class Subscriber(models.Model):
    email = models.EmailField(unique=True)

    def __str__(self):
        return "Subscriber Id: {id} - {email}".format(id=self.pk, email=self.email)


class MailingRequest(models.Model):
    newsletter = models.ForeignKey(Newsletter)
    subscribers = models.ManyToManyField(Subscriber)
    send_time = models.DateTimeField(auto_now=True)

    def save(self):
        #TODO: hack used 
        if self.pk is None:
            result = super(MailingRequest, self).save()
            self.send_mails()
            return result
        else:
            raise ValidationError("Can't update MaillingRequest instance")

    def __str__(self):
        return "MailingRequest Id: {id} - {subject} {send_time}".format(id=self.pk, subject=self.newsletter.subject, send_time=self.send_time)

    def send_mails(self):
        recpients = []
        for subscriber in self.subscribers.all():
            recpients.append(subscriber.email)
        if recpients:
            result = send_mail(self.newsletter.subject, self.newsletter.content, settings.EMAIL_HOST_USER, recpients, fail_silently=False)

from django.shortcuts import render
from rest_framework import viewsets, mixins

from .models import Subscriber
from .serializers import SubscriberSerializer


class CreateSubscriberViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    """
    A ViewSet for creating newsletter's subscribers.
    """
    queryset = Subscriber.objects.none()
    serializer_class = SubscriberSerializer

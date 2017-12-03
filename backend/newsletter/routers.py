from rest_framework.routers import SimpleRouter

from newsletter.views import CreateSubscriberViewSet


router = SimpleRouter()

router.register(r'subscribers', CreateSubscriberViewSet, 'Subscriber')

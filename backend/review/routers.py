from rest_framework.routers import SimpleRouter

from review.views import ReviewViewSet

router = SimpleRouter()

router.register(r'reviews', ReviewViewSet, 'Review')

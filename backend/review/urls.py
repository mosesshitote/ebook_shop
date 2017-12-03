from django.conf.urls import url, include

from review.routers import router

urls = [
    url(r'review/', include(router.urls))
]

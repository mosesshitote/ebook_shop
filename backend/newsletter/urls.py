from django.conf.urls import url, include

from newsletter.routers import router


urls = [
        url(r'newsletter/', include(router.urls))
]

from django.conf.urls import url, include

from library.routers import router
from library.views import get_epub

urls = [
    url(r'library/', include(router.urls)),
    url(r'library/epub/(?P<key>[a-f0-9\-]{36})/$', get_epub)
]

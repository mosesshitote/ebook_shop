from datetime import datetime

from rest_framework import viewsets, permissions, mixins
from django.http import HttpResponse

from library.models import Author, Ebook, Loan
from library.serializers import AuthorSerializer, EbookSerializer, LoanSerializer
from library.permissions import LoanPermission


class AuthorViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    serializer_class = AuthorSerializer
    queryset = Author.objects.all()


class EbookViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    serializer_class = EbookSerializer
    queryset = Ebook.objects.all()


class LoanViewSet(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin, 
                  mixins.CreateModelMixin, 
                  mixins.DestroyModelMixin,
                  viewsets.GenericViewSet):
    serializer_class = LoanSerializer
    permission_classes = (permissions.IsAuthenticated, LoanPermission)

    def get_queryset(self):
        return Loan.objects.filter(client=self.request.user)


def get_epub(request, key):
    loan = Loan.objects.get(pk=key)
    if loan is not None:
        if loan.client == request.user or request.user.is_staff:
            if datetime.now() < loan.expired_at:
                with open(loan.ebook.epub.path, 'rb') as epub_file:
                    response = HttpResponse(epub_file.read(), content_type='application/epub')
                    response['Content-Disposition'] = 'attachment; filename={}.epub'.format(loan.ebook.name)
                    return response
            else:
                return HttpResponse("Your loan is expired", status=403)
    return HttpResponse(status=404)
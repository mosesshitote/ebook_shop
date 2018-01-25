from datetime import datetime

from rest_framework import viewsets, permissions, mixins, response, status
from django.http import HttpResponse
from django.utils import timezone

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
        return Loan.objects.filter(client=self.request.user).filter(expired_at__gte=datetime.now())

    def create(self, request, *args, **kwargs):
        request.data['client'] = request.user.id
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return response.Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


def get_epub(request, key):
    loan = Loan.objects.get(pk=key)
    if loan is not None:
        if loan.client == request.user or request.user.is_staff:
            if timezone.make_aware(datetime.now()) < loan.expired_at:
                with open(loan.ebook.epub.path, 'rb') as epub_file:
                    response = HttpResponse(epub_file.read(), content_type='application/epub')
                    response['Content-Disposition'] = 'attachment; filename={}.pdf'.format(loan.ebook.name.replace(' ', '_'))
                    return response
            else:
                return HttpResponse("Your loan is expired", status=403)
    return HttpResponse(status=404)

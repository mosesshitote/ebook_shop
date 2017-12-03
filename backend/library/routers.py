from rest_framework.routers import SimpleRouter

from library.views import AuthorViewSet, EbookViewSet, LoanViewSet

router = SimpleRouter()

router.register(r'authors', AuthorViewSet, 'Author')
router.register(r'ebooks', EbookViewSet, 'Ebook')
router.register(r'loans', LoanViewSet, 'Loan')

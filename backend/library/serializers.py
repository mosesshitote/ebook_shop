from rest_framework import serializers

from library.models import Author, Ebook, Loan


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'


class EbookSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    image_url = serializers.ReadOnlyField()

    class Meta:
        model = Ebook
        fields = ('name', 'author', 'isbn', 'description', 'image', 'id', 'image_url',)


class LoanSerializer(serializers.ModelSerializer):
    ebook = EbookSerializer()
    expired_at = serializers.DateTimeField(read_only=True)
    key = serializers.CharField(read_only=True)

    class Meta:
        model = Loan
        fields = ('ebook', 'expired_at', 'key',)

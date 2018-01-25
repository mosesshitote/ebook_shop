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
    ebook_object = EbookSerializer(read_only=True, source='ebook')
    expired_at = serializers.DateTimeField(read_only=True)
    uuid_key = serializers.CharField(read_only=True)

    class Meta:
        model = Loan
        fields = ('ebook', 'expired_at', 'uuid_key', 'ebook_object', 'client')

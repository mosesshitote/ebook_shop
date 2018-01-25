from rest_framework import serializers

from authentication.serializers import UserSerializer
from library.serializers import EbookSerializer
from review.models import Review


class ReviewSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)
    created_at = serializers.DateTimeField(read_only=True)
    review_object = EbookSerializer(read_only=True, source='object_review')

    class Meta:
        model = Review
        fields = ('content', 'object_review', 'created_by', 'created_at', 'updated_at', 'review_object',)


from rest_framework import serializers

from authentication.serializers import UserSerializer
from review.models import Review


class ReviewSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)
    created_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Review
        fields = ('content', 'object_review', 'created_by', 'created_at', 'updated_at',)        


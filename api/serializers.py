from .models import Todo
from rest_framework import serializers


class TodoSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True)
    class Meta:
        model = Todo
        fields = ['id', 'title', 'is_completed', 'created_at', 'image']
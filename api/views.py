from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo

# Create your views here.
class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    
    
    @action(detail=False, methods=['get'], url_path='completed')
    def completed(self, request):
        completed_todos = Todo.objects.filter(is_completed=True)
        serializer = self.get_serializer(completed_todos, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'], url_path='not-completed')
    def not_completed(self, request):
        not_completed_todos = Todo.objects.filter(is_completed=False)
        serializer = self.get_serializer(not_completed_todos, many=True)
        return Response(serializer.data) 
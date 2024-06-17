from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=200)
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='images/', default='images/default.jpg/', null=True, blank=True)
    
    
    def __str__(self):
        return self.title
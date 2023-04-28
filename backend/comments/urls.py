from django.urls import path  
from . import views

urlpatterns = [
    path('get/<int:video_id>/', views.get_all_comments),
    path('<int:video_id>/', views.user_video_comments),
]
from django.urls import path  
from . import views

urlpatterns = [
    path('get/<str:video_id>/', views.get_all_comments),
    path('<str:video_id>/', views.user_video_comments),  
    # This needed to be a string imput url so that when passing in the information from the YOUTUBE API it takes in letters not just numbers
]
import django.urls import path 
from . import views

urlpatterns = [
    path('', views.users_comments),
    path('<video_id>', views.get_all_comments),
]
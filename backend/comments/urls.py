from django.urls import path  
from . import views

urlpatterns = [
    path('', views.user_comments),
    path('<int:video_id>/', views.get_all_comments),
    

]
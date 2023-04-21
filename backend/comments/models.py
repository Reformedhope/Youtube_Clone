from django.db import models
from authentication.models import User

# Create your models here.


class Comment (models.model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) #Will need to put the video information to tie the user to the video. 
    video_id = models.CharField()
    text = models.CharField()
    likes = models.IntegerField()
    dislikes = models.IntegerField()    
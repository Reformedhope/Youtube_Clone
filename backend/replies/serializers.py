from rest_framework import serializers
from .models import Reply

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        feilds = [ 'id', 'text','comment_id', 'user_id']
        depth = 1
        
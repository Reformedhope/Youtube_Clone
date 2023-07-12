
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializers import ReplySerializer
from rest_framework import status
# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def  get_all_replies(request, video_id):  # What goes into the () is the parameters that can be used in the function. 
    reply_comments = Reply.objects.filter(video_id=video_id)
    serializer = ReplySerializer(reply_comments, many=True)
    return Response(serializer.data)


@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def user_video_repies(request,video_id):
    print(
        'User',f" {request.user.id}{request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = ReplySerializer(data =request.data)
        if serializer.is_valid():
            serializer.save(user=request.user, video_id=video_id)
            return Response (serializer.data, status=status.HTTP_201_CREATED)
        return Response (serializer.errors, status.HTTP_400_BAD_REQUEST)
    





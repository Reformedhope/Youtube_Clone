
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer
from rest_framework import status

@api_view(['GET'])
@permission_classes([AllowAny])
def  get_all_comments(request, video_id):  # What goes into the () is the parameters that can be used in the function. 
    video_comments = Comment.objects.filter(video_id=video_id)
    serializer = CommentSerializer(video_comments, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_video_comments(request,video_id):
    print(
        'User ', f" {request.user.id} {request.user.email} {request.user.username}")
    if request.method =='POST':
        serializer = CommentSerializer(data =request.data)
        if serializer.is_valid():
            serializer.save(user=request.user, video_id=video_id)
            return Response (serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
    elif request.method == "GET":
        video_comments = Comment.objects.filter(video_id=video_id)
        serializer = CommentSerializer(video_comments, many=True)
        return Response(serializer.data)
    
    # These needs to be tested
    elif request.method =='PUT':
        serializer = CommentSerializer(data =request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user, video_id=video_id)
            return Response (serializer.data, status=status.HTTP_201_CREATED)
        elif request.method == 'DELETE':
             Comment.delete()
             return Response(status=status.HTTP_204_NO_CONTENT)

        
            

    

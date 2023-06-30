import Comment from "./Comment";
import React, { useState, useEffect } from 'react';
import CommentForm from "./CommentForm";
import axios from "axios";

const CommentList = (props) => {
  const [comments, setComments] = useState([]);

  async function getAllComments() {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/comments/get/${props.video_Id}/`);
      console.log(response.data);
      setComments(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllComments(); // Call the function
  }, [props.video_Id]);
    
    
  return (
    <div>
    {comments.map((comment) => (
      <div key={comment.id}>
        <Comment comment={comment} />
      </div>
    ))}
    {/* <CommentForm postComment={setComments} /> I do not think I need this but going to keep it here just in case */}
  </div>
);
}
export default CommentList;
import React, { useState, useEffect } from "react";
import axios from "axios";

const ReplyList = (props) => {
  const [reply, setReply] = useState([]);

  async function getAllReplies() {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/comments/get/${props.video_Id}/`
      );
      console.log(response.data);
      setReply(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllReplies(); // Call the function
  }, [props.video_Id]);

 
  return (
    <div>
        <div key={reply.id}>
          {/* <Comment comment={comment} /> */}
        </div>
      
      {/* <CommentForm postComment={setComments} /> I do not think I need this but going to keep it here just in case */}
    </div>
  );
};
export default ReplyList;

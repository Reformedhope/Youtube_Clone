import React from "react";
import useAuth from "../../hooks/useAuth";

const Comment = (props) => {
  const [user] = useAuth();

  return (
    <div>
      <h3>{user.username}:</h3>
      <p>{props.comment.text}</p>
    
    </div>
  );
};

export default Comment;

import React from "react";
import useAuth from "../../hooks/useAuth";

const Comment = (props) => {
  const [user] = useAuth();

  return (
    <div>
      {user && (
        <>
          <h3>{user.username}:</h3>
          <p>{props.comment.text}</p>
          <p>Likes: {props.comment.likes}</p>
          <p>Dislikes: {props.comment.dislikes}</p>
          <hr />
        </>
      )}
    </div>
  );
};

export default Comment; 

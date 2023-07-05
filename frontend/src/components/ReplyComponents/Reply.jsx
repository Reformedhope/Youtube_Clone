import React from "react";
import useAuth from "../../hooks/useAuth";

const Reply = (props) => {
  const [user] = useAuth();

  return (
    <div>
      {user && (
        <>
          <h3>{user.username}:</h3>
          <p>{props.reply.text}</p>
          <p>Likes: {props.reply.likes}</p>
          <p>Dislikes: {props.reply.dislikes}</p>
          <hr />
        </>
      )}
    </div>
  );
};

export default Reply; 
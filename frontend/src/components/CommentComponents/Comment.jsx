// import React from "react";
// import useAuth from "../../hooks/useAuth";

// const Comment = (props) => {
//   const [user] = useAuth();

//   return (
//     <div>
//       {user && (
//         <>
//           <h3>{user.username}:</h3>
//           <p>{props.comment.text}</p>
//           <p>Likes: {props.comment.likes}</p>
//           <p>Dislikes: {props.comment.dislikes}</p>
//           <hr />
//         </>
//       )}
//     </div>
//   );
// };

// export default Comment; 


import React from "react";

const Comment = ({ comment }) => {
  return (
    <div>
      {comment.user ? (
        //If the expression is truthy it execute the code between the
        //Parenteses above and below
        //if the expression is falsy it will exicute the expression after the : in 
        //those parentises.
        <p>
          {/* Displays the username of the commenter */}
          <strong>{comment.user.username}</strong>: {comment.text}
        </p>
      ) : (
        // {/* If the comment is from an anonymous user, display "Anonymous" */}
        <p>Anonymous: {comment.text}</p>
      )}
      {/* //If the condition is true, the code between ? and : is executed.
       If the condition is false, the code after : is executed. */}

    </div>
  );
};

export default Comment;
// The overall logic of this code segment is as follows: 
//If the comment has a user, it displays the username followed by the comment text. 
//If the comment is from an anonymous user (no user provided), it displays 
//"Anonymous" followed by the comment text. But I have it that a user must be signed in to
//leave a comment. if the user is not signed it- the code on comment form will redirect them to
//the log in page. 
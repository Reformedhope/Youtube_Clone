import useAuth from "../../hooks/useAuth";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const CommentForm = (props) => {
  
  const [user, token] = useAuth();
  const [text, setText] = useState();
  const [likes, setLikes] =useState(0)
  const [dislikes, setDislikes]= useState(0)
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  // const refresh = () => window.location.reload( true);


  async function postComment(defaultValues) {
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/comments/${props.videoId}/`,
        defaultValues,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      ); 

      console.log(response.data);
     
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!user) {
      const promptMessage = "You must be signed in to post a comment! Please sign in.";
      setErrorMessage(promptMessage);

      const confirmed = window.confirm(promptMessage);
      if (confirmed) {
        navigate("/login");
      }

      return;
    }
    let defaultValues = {
      video_id: props.videoId,
      text: text,
      likes: likes,
      dislikes: dislikes,
    };
  
    try {
      await postComment(defaultValues);
      // Refresh the page to fetch the updated comments
      window.location.reload();
    } catch (error) {
      console.error(error);
      postComment(defaultValues);
    }
  }

  return (
    <div className="container"> 
      <h2>{user ? user.username : "Guest"}</h2>
      {/* if the user truely is a user the user name will display, if the user is not a user guest will display */}
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Comment:{" "}
          <input
            type="text"
            name="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <input type="number" value={likes} onChange={(event) => setLikes(event.target.value)} />
          <input type="number" value={dislikes} onChange={(event) => setDislikes(event.target.value)} />
        </label>
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit" >
          Add comment!
        </button>
      </form>
    </div>
  );
};

export default CommentForm;


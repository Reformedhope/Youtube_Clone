import useAuth from "../../hooks/useAuth";
import axios from "axios";
import React, { useState } from "react";

const CommentForm = (props) => {
  const [user, token] = useAuth();
  const [text, setText] = useState();
  const [likes, setlikes] =useState(0)
  const [dislikes, setDislikes]= useState(0)
  const refresh = () => window.location.reload( true);


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
      ); //formData

      console.log(response.data);
     
    } catch (error) {
      console.error(error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    let defaultValues = {
      video_id: props.videoId,
      text: text,
      likes: likes,
      dislikes:dislikes,
    };
    console.log(defaultValues);

    postComment(defaultValues);
  }

  return (
    <div className="container">
      <h2>{user.username}</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Comment:{" "}
          <input
            type="text"
            name="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <input type= "number" value = {likes} onChange={(event) => setlikes(event.target.value)}/>
          <input type= "number" value = {dislikes} onChange={(event) => setDislikes(event.target.value)}/>
        </label>
        <button type="submit" onClick={refresh}>Add comment!</button >
      </form>
    </div>
  );
};

export default CommentForm;


import React from "react";
import { useNavigate } from "react-router-dom"; // This is how you navigate from page to page programatically.

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";  //These come from the hooks folder.
import axios from "axios";

//Declare an object

let defaultValues= {
  "user":"",
  "video_id":"",
  "text":"",
  "likes":"",
  "dislikes":"",
};

const CommentPage= () => {
  const[user, token] = useAuth();
  const navigate = useNavigate();  //variable that will allow to navigate to other pages.
  const [formData, handleInputChange, handleSubmit] = useCustomForm(defaultValues, postComment)  //we are bringing in custom hook that will handle form data. Inital values is a roue handler function for what happens when we submit the form.

  async function postComment(){
    try{
      let response = await axios.post("http://127.0.0.1:8000/api/comments/123456/",formData,{
        headers:{
          Authorization: 'Bearer ' + token
        }
      })
      navigate("/")
    }catch(error) {
      console.log(error.message)

    }
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
                     value={formData.text}
                     onChange={handleInputChange}
                   />
                 </label>
                 <button>Add comment!</button>
               </form>
             </div>
    
         );



}

export default CommentPage



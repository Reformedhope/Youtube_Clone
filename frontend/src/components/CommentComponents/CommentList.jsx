import Comment from "./Comment";
import React, { useState, useEffect } from 'react';


const CommentList = (props) => {

    const [comments, setComments] = useState();
    




    async function getAllComments(){
        let response = await axios.get (`http://127.0.0.1:8000/api/comments/get/${props.video_Id}/`);
         console.log(response.data);
         setComments(response.data)
         
       
    };
    
    
    useEffect (() => {
        getAllComments

    }, [props.video_Id]);
    
    
    
    
    return ( 
    <div>
        {props.comments.map((comment) => {
            return(
            <Comment comment={comment} />
            )
        })}
    </div> 
    );
}
 
export default CommentList;

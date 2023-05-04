const CommentList = (props) => {
    return ( 

        {props.videos.map((comments)=>{
        

            return(
                <tr>
                <td>{comments.user}</td>
                <td>{comments.video_id}</td>
                <td>{comments.text}</td>
                <td>{comments.likes}</td>
                <td>{comments.dislikes}</td>
                
                </tr>
            )
     );
}
 
export default CommentList;
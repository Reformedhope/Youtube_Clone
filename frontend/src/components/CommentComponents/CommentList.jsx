import Comment from "./Comment";

const CommentList = (props) => {
    
    async function getAllComments(){
        let response = await axios.get ('http://127.0.0.1:8000/api/songs/');
         console.log(response.data);
         
       
    };
    
    
    
    
    
    
    
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

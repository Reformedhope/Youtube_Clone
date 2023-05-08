import Comment from "./Comment";

const CommentList = (props) => {
    return ( 
    <div>
        {props.map((comment) => {
            return(
            <Comment comment={comment} />
            )
        })}
    </div> 
    );
}
 
export default CommentList;








const CommentList = (props) => {
    return ( 
        <div className=' form-border1'>
            <table>
            <tbody>
                {props.map((comment)=>{
                return(
                   
                        <ul>
                        <li>{comment.user}</li>
                        <li>{comment.video_id}</li>
                        <li>{comment.text}</li>
                        <li>{comment.likes}</li>
                        <li>{comment.dislikes}</li>
                        </ul>
                    
                );
                    })}
                </tbody>
            </table>
        </div>
             );
}
 
export default CommentList;









// const CommentList = (props) => {
//     const [comments, setComments] = useState([]);
    
//     useEffect(() => {
//             const Comments = async () => {
//             try {
//                 let response = await axios.get("http://127.0.0.1:8000/api/comments/123456/", {
//                 headers: {
//                     Authorization: "Bearer " + token,
//                 },
//                 });
//                 setcomments(response.data);
//             } catch (error) {
//                 console.log(error.response.data);
//             }
//             };
//         Comments();
//       }, [token]);
   
//     };
   
//     return ( 

        
        

        
//         <tr>
//         <li>{comments.user}</li>
//         <li>{comments.text}</li>
//         <li>{comments.likes}</li>
//         <li>{comments.dislikes}</li>
//         </tr>
            
//      );
// }
 
// export default CommentList;
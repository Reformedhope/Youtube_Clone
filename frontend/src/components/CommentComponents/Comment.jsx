// async function postNewComment(){
//     try{
//         let response = await axios.post("http://127.0.0.1:8000/api/comments/123456/",formData,{
//           headers:{
//             Authorization:'Bearer ' + token
//           }  
//         })
//         navigate("/")
        
//     }catch(error){
//         console.log(error.message)

//     }
// }

const Comment = (props) => {
  return ( <div>
      <p>{props.comment.text}</p>
      <p></p>
  </div> );
}
 
export default Comment;
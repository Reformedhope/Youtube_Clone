const CommentList = (props) => {
    const [comments, setComments] = useState([]);
        useEffect(() => {
            const fetchComments = async () => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/comments/123456/", {
                headers: {
                    Authorization: "Bearer " + token,
                },
                });
                setcomments(response.data);
            } catch (error) {
                console.log(error.response.data);
            }
            };
        fetchComments();
      }, [token]);
   
    };
   
    return ( 

        
        

        
        <tr>
        <td>{comments.user}</td>
        <td>{comments.text}</td>
        <td>{comments.likes}</td>
        <td>{comments.dislikes}</td>
        </tr>
            
     );
}
 
export default CommentList;
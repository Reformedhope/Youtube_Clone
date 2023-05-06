import { useState, useEffect } from "react";
import axios from "axios";

// const GetVideos = () => {

//     const [Videos, setvideos] =useState

//     useEffect(() => {   //running when a condition is met, with empty brackets only runs when page initially loads
//         getAllVideos();

//       }, []);

//     async function getAllVideos(){
//         let response = await axios.get ('https://www.googleapis.com/youtube/v3/search?q=minecraftsword&type=video&key=AIzaSyD-g1Atdm6VXNETqjMznPTgEmPXOl3Jrfs&part=snippet&type=video&maxResults=5');
//          console.log(response.data);
//          setvideos(response.data)

//     return (
//         <div>
//             <button onClick={()=> getAllVideos()}>Get All Songs</button>
//         </div>

//      );
// }
// }

// export default GetVideos;


function VideoPage() {
    const [videos, setVideos] = useState([]);
  
    useEffect(() => {
      async function fetchVideos() {
          let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=minecraftsword&type=video&key=AIzaSyD-g1Atdm6VXNETqjMznPTgEmPXOl3Jrfs&part=snippet&type=video&maxResults=6");
          setVideos(response.data.items);
      }
      fetchVideos();
    }, []);
  
    return (
      <div>
        <ul>
          {videos.map((video) => (
            <li key={video.id.videoId}>
              <iframe
                width="200"
                height="150"
                src={"https://www.youtube.com/embed/" + video.id.videoId}
                title={video.snippet.title}
              ></iframe>
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default VideoPage;

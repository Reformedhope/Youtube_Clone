import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import CommentForm from "../../components/CommentComponents/CommentForm";
import CommentsList from '../../components/CommentComponents/CommentList';
import "./videopage.css";
import CommentList from "../../components/CommentComponents/CommentList";

function VideoPage() {
  const [videos, setVideos] = useState([]);

  async function fetchVideos() {
   
    let response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search?q=Kitten&type=video&key=AIzaSyD-g1Atdm6VXNETqjMznPTgEmPXOl3Jrfs&part=snippet&type=video&maxResults=1"
    );
    
    setVideos(response.data.items);
  }
  useEffect(() => {
    fetchVideos();
  }, []);
// This say that if video has a value then it will rendar 
  return videos && (
    <div>
      <div className="mainvideos">
        <ul>
          {videos.map((video) => (
            <li key={video.id.videoId}>
              <iframe
                width="700"
                height="415"
                src={"https://www.youtube.com/embed/" + video.id.videoId}
                title={video.snippet.title}
              ></iframe>
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.description.substring(0, 50) + "..."}</p>
              {/* tried .slice(0,100) to make the description less characters but that did not work... ?  adding +...  ex:  <p>{video.snippet.description.slice(0, 50) + "..."}</p> 
              this also didnt work. */}
            </li>
          ))}
        </ul>

        <CommentForm videoId={videos[0]?.id.videoId} />
      </div>
      <div className="relatedvideos">
        <h2> Related Videos</h2>
        <RelatedVideos RelatedVideos={setVideos} />
        <CommentList getAllComments = {Comment}/>

        
      </div>
    </div>
  );
}

export default VideoPage;

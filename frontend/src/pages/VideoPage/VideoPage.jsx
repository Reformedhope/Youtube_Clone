import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import CommentForm from "../../components/CommentComponents/CommentForm";
import CommentList from "../../components/CommentComponents/CommentList";
import "./videopage.css";




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



  return videos && (
    <div>
      <div class="container text-center">
  <div class="row">
    <div class="col">
      <div>
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
      </div>
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
      <div>
      <CommentForm videoId={videos[0]?.id.videoId} />
      </div>
        <CommentList video_Id={videos[0]?.id.videoId} />
      <div>
        <h2> Related Videos</h2>
        <RelatedVideos RelatedVideos={setVideos} />
      </div>
    </div>
  );
}

export default VideoPage;

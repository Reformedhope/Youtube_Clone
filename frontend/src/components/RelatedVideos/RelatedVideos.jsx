import { useState, useEffect } from "react";
import axios from "axios";


function RelatedVideo() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
        let response = await axios.get("https://www.googleapis.com/youtube/v3/search?type=video&relatedToVideoId=kuFoGTMoSMo&key=AIzaSyD-g1Atdm6VXNETqjMznPTgEmPXOl3Jrfs&part=snippet&maxResults=4");
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
              width="125"
              height="100"
              img src ={video.snippet.thumbnails.default.url}
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

export default RelatedVideo;
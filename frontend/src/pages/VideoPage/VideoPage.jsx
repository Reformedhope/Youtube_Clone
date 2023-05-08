import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import CommentForm from '../../components/CommentComponents/CommentForm';
// import CommentsList from '../../components/CommentComponents/CommentList';

function VideoPage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
        let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=minecraftsword&type=video&key=AIzaSyD-g1Atdm6VXNETqjMznPTgEmPXOl3Jrfs&part=snippet&type=video&maxResults=1");
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
              width="700"
              height="415"
              rc={"https://www.youtube.com/embed/" + video.id.videoId}
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

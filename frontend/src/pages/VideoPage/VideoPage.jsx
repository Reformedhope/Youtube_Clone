import React, { useState, useEffect } from "react";
import axios from "axios";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import CommentForm from "../../components/CommentComponents/CommentForm";
import CommentList from "../../components/CommentComponents/CommentList";
import "./videopage.css";

function VideoPage() {
  const [videos, setVideos] = useState([]);
  const [mainVideoId, setMainVideoId] = useState("");

  useEffect(() => {
    async function fetchVideos() {
      let response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search?q=Kitten&type=video&key=AIzaSyD-g1Atdm6VXNETqjMznPTgEmPXOl3Jrfs&part=snippet&type=video&maxResults=1"
      );
      setVideos(response.data.items);
      setMainVideoId(response.data.items[0]?.id.videoId);
    }

    fetchVideos();
  }, []);

  const handleRelatedVideoClick = (videoId) => {
    setMainVideoId(videoId);
  };

  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div>
              {mainVideoId && (
                <iframe
                  width="700"
                  height="415"
                  src={`https://www.youtube.com/embed/${mainVideoId}`}
                  title="Main Video"
                ></iframe>
              )}
            </div>
            <h3>{videos[0]?.snippet.title}</h3>
            <p>{videos[0]?.snippet.description}</p>
          </div>
          <div className="col">2 of 2</div>
        </div>
        <div className="row">
          <div className="col">1 of 3</div>
          <div className="col">2 of 3</div>
          <div className="col">3 of 3</div>
        </div>
      </div>
      <div>
        <CommentForm videoId={videos[0]?.id.videoId} />
      </div>
      <CommentList key={videos[0]?.id.videoId} video_Id={videos[0]?.id.videoId} />
      <div>
        <h2>Related Videos</h2>
        <RelatedVideos
          videos={videos}
          onVideoClick={handleRelatedVideoClick}
        />
      </div>
    </div>
  );
}

export default VideoPage;
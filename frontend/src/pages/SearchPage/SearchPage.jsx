import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./searchpage.css";



const SearchPage = (props) => {
  const [searchVideos, setSearchvideos] = useState([]);

  async function fetchSearchVideos(searchInput) {
    let response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search?q=" +searchInput +"&type=video&key=AIzaSyD-g1Atdm6VXNETqjMznPTgEmPXOl3Jrfs&part=snippet&type=video&maxResults=6"
    );
    setSearchvideos(response.data.items);
  }


  useEffect(() => {
    fetchSearchVideos("Cutekittens");// puting this here allows the videos rendering to have cute kittens pasted into the input
  }, []);
  const firstRowVideos = searchVideos.slice(0, 3);
  const secondRowVideos = searchVideos.slice(3,6 );

  return (
    <div className="flexbox-item">
      <SearchBar searchInput={fetchSearchVideos} />
      <div className="flexbox-item">
        <div className="result-container">
          <ul>
            {firstRowVideos.map((video) => (
              <li key={video.id.videoId} className="result-item">
                <img src={video.snippet.thumbnails.default.url} alt="Youtubevideosnippet"/>
                <a title={video.snippet.title} />
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
              </li>
            ))}
          </ul>
          <div className="result-container">
          <ul className="cards">
            {secondRowVideos.map((video) => (
              <li key={video.id.videoId} className="result-item">
                <img src={video.snippet.thumbnails.default.url} alt="youtube snippet"/>
                <a title={video.snippet.title} />
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SearchPage;



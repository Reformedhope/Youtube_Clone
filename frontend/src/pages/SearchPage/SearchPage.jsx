import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./searchpage.css";

const SearchPage = (props) => {
  const [searchVideos, setSearchvideos] = useState([]);

  async function fetchSearchVideos(searchInput) {
    let response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search?q=" +
        searchInput +
        "&type=video&key=AIzaSyD-g1Atdm6VXNETqjMznPTgEmPXOl3Jrfs&part=snippet&type=video&maxResults=6"
    );
    setSearchvideos(response.data.items);
  }
  useEffect(() => {
    fetchSearchVideos("");
  }, []);

  return (
    <div>
      <SearchBar searchInput={fetchSearchVideos} />
      <div className="link">
        <Link to="/videopage">VideoPage</Link>
      </div>
      <div className="flexbox-container">
        <div className="flexbox-item flexbox item-1">
          <ul>
            {searchVideos.map((video) => (
              <li key={video.id.videoId}>
                <img src={video.snippet.thumbnails.default.url} />
                <a title={video.snippet.title} />
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

// <div>
//     {console.log(LocalData)}

// </div>

// mapped your videos returned from YT API add a LINK to navigate to VideoPage

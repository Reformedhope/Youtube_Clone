import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";


const SearchPage = (props) => {
  const [ searchVideos, setSearchvideos]=useState([])
  
  useEffect(() => {
    async function fetchSearchVideos(searchInput) {
    
      let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q="+ searchInput +"&type=video&key=AIzaSyD-g1Atdm6VXNETqjMznPTgEmPXOl3Jrfs&part=snippet&type=video&maxResults=6")
      setSearchvideos(response.data.items);

    }
    fetchSearchVideos();

  }, []);
  
  
  
  
  
  
  return ( 
    <div>
      <SearchBar searchInput={setSearchvideos}  />
      <Link to ="/videopage">VideoPage</Link>
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
   );
}
 
export default SearchPage;











    // <div>
    //     {console.log(LocalData)}
        
       
    // </div>

    
// mapped your videos returned from YT API add a LINK to navigate to VideoPage


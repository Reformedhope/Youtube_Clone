import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";


const SearchPage = (props) => {
  const [ searchVideos, setSearchvideos]=useState(LocalData)
  
  useEffect(() => {
    async function fetchSearchVideos(){
      try{}
      let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=minecraft&type=video&key=AIzaSyD-g1Atdm6VXNETqjMznPTgEmPXOl3Jrfs&part=snippet&type=video&maxResults=6")
    
    
    
    
    }

  }, [])
  
  
  
  
  
  
  return ( 
    <div>
      <ul>
        {}
      </ul>
    </div>

   );
}
 
export default SearchPage;


props








    // <div>
    //     {console.log(LocalData)}
    //     <SearchBar searchInput={videosearch}  />
    //     <Link to ="/videopage">VideoPage</Link>
    // </div>

    
// mapped your videos returned from YT API add a LINK to navigate to VideoPage


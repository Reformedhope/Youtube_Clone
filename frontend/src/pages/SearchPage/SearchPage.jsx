import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import LocalData from "../../LocalData";


const SearchPage = (props) => {
    const [videos, setVideos]= useState([])
    
    
    
    async function videosearch (searchInput){
        let response = videos.filter('https://www.googleapis.com/youtube/v3/search?q=minecraftsword&type=video&key=AIzaSyD-g1Atdm6VXNETqjMznPTgEmPXOl3Jrfs&part=snippet&type=video&maxResults=6')
        console.log(response.data)
        setVideos(response.data)
    };
    

          
        
                
                
    return ( 
        <div>
            {console.log(LocalData)}
            <SearchBar searchInput={videosearch}  />
            <Link to ="/videopage">VideoPage</Link>
        </div>
            
            
        
     );
};
 
export default SearchPage;








// mapped your videos returned from YT API add a LINK to navigate to VideoPage


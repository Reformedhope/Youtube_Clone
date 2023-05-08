import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";







const SearchPage = (props) => {
    const [videos, setvideos]=useState ([])
    // const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues)
    // const [user, token] = useAuth();
    
    
    async function videosearch (searchInput){
        let response = videos.filter('https://www.googleapis.com/youtube/v3/search?q=minecraft sword&type=video&key=AIzaSyD-g1Atdm6VXNETqjMznPTgEmPXOl3Jrfs&part=snippet&type=video&maxResults=6')
        
        
        
        console.log(response.data)
        setvideos(response.data)
    
    };
    

          
        
                
                
    return ( 
        <div>
            <SearchBar searchInput={videosearch}/>
            <Link to ="/videopage">VideoPage</Link>
        </div>
            
            
        
     );
};
 
export default SearchPage;








// mapped your videos returned from YT API add a LINK to navigate to VideoPage


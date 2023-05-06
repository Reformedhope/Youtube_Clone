import React, { useState } from 'react';
import axios from "axios";


const SearchBar = (props) => {
    const [search, setSearch] =useState([]);
    const [videos, setvideos]=useState([]);
    
    async function getVideos(){
        let response = await axios.get ('https://www.googleapis.com/youtube/v3/search?q=minecraft sword&type=video&key=AIzaSyD-g1Atdm6VXNETqjMznPTgEmPXOl3Jrfs&part=snippet&type=video&maxResults=5');
         console.log(response.data);
         setvideos(response.data)
       
       };
     
    
    
    
    
    
    function handleVideoSubmit(event){    
        event.preventDefault();
        props.searchInput(search)
    
    };
      
            
            
            
    return ( 
        <div>
            <div className='style'>
                <form onSubmit={handleVideoSubmit}>
                    <input type='text'
                        placeholder="Search a song" 
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    /> 
                    <button type='submit'>Search Songs</button> 
                </form>
            </div>
        </div>
        
    );
    
};
 export default SearchBar;
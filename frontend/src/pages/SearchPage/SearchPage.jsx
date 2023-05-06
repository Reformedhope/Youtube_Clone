import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import useCustomForm from "../../hooks/useCustomForm";


const SearchPage = (props) => {
    const [video, setVideo] =useState([])
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues)
    const [user, token] = useAuth();
    
    async function searchedVideos(){
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=minecraft sword&type=video&key=AIzaSyD-g1Atdm6VXNETqjMznPTgEmPXOl3Jrfs&part=snippet&type=video&maxResults=5')
        console.log(response.data)
        setVideo(response.data)
    
    }
    
    return ( 
     <h1>SearchPage</h1>



     );
};
 
export default SearchPage;








// mapped your videos returned from YT API add a LINK to navigate to VideoPage


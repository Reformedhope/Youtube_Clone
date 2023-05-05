import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useCustomForm from "../../hooks/useCustomForm";


const searchPage = () => {
    const [video, setVideo] =useState([];)
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues)




async function searchedVideos(){
    let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=minecraft sword&type=video&key=AIzaSyD-g1Atdm6VXNETqjMznPTgEmPXOl3Jrfs&part=snippet&type=video&maxResults=5')
    console.log(response.data)
    setVideo(response.data)

}

}
export default searchPage;
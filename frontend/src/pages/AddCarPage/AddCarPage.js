import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";


let initialValues ={
    make: "",
    model:"",
    year:"",
}

// For as many inputs as you need you would put the initial values up to there and than down below make sure they are referencing them 

const AddCarPage = () => {
    const[user, token]= useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues,postNewCar)

    // Make an ansync function using the function key word dont use the arrow function, otherwise
    // you wont be able to use it properly  up  top in the const  section because of the hoisting behavior with functions.  

    async function postNewCar(){
        try{
            let response = await axios.post("http://127.0.0.1:8000/api/cars/",formData,{
              headers:{
                Authorization:'Bearer ' + token
              }  
            })
            navigate("/")
            
        }catch(error){
            console.log(error.message)

        }
    }

    return (
        <div className="container">
            <h2>{user.username}</h2>
          <form className="form" onSubmit={handleSubmit}>
            <label>
                make:{" "}
              <input
                type="text"
                name="make"
                value={formData.make}
                onChange={handleInputChange}
              />
            </label>
            <label>
              model:{" "}
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
              />
            </label>
            <label>
                year:{" "}
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
              />
            </label>
            <button>Add a Car!</button>
          </form>
        </div>

    );


}


export default AddCarPage

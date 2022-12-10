import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router";
import './App.css';

export default function PhotoAlbum() {
  
    const navigate = useNavigate();
  
    const [form, setForm] = useState({
      firstName: "",
      lastName: "",
      relationship: "",
      email: "",
      password: "",
    });
    
    // These methods will update the state properties.
    // function updateForm(value) {
    //   return setForm((prev) => {
    //     return { ...prev, ...value };
    //   });
    // }
  
    // This function will handle the submission.
    async function onSubmit(e) {
  
      e.preventDefault();
     
      
      const configuration = {
        method: "post",
        url: "http://localhost:5000/records/add",
        data: {
           ...form,
          
        },
      };
  
      axios(configuration)
      .then((result) => {console.log(result);})
      .catch((error) => {console.log(error);})
      
  
      setForm({ firstName: "", lastName: "", relationship: "", email: "", password: "" });
      
    }
  
    // This following section will display the form that takes the input from the user.
    return (
      <div class="jumbotron jumbotron-fluid">
  
      </div>
  
    );
  }
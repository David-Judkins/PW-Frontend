import React, { useState } from "react";

import { createRoot } from 'react-dom/client'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import './App.css';
import PhotoAlbum from "./photo-album";


export default function Login() {

  
  
  const navigate = useNavigate();

  const [state, setForm] = useState({
    firstName: "",
    lastName: "",
    relationship: "",
    email: "",
    password: "",
  })

  //Harish - thank you for your patience, i will be practicing small easy problems like these as it has been
  //a long time since asked to participate in impromptu coding questions. Again thank you for your patience

  // this not working bc i was using curly brackets instead of square brackets

  //i incorectly initialized my variables as constants
  // var list = [2,2,1,2,3,6,4,3];
  // var string = maam;

  // function palindrome(string){
  //   const stringCopy = string;
  //   const palindromeCheck = true;
  //   for(let i = 0; i < string.length; i++){
  //       if(string[i] =! string[string.length-i] && i != string.length-i && string.length % 2 == 0){
  //         palindromeCheck = false;
  //       }
  //   }
  // }

  // function maxValue(list){
  //   list.sort(function(a,b){
  //       return a-b
  //   });
  //   const maxValue = list[list.length -1 ]
  //   }

  // }
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {

    e.preventDefault();
   
    
    const configuration = {
      method: "post",
      url: "http://localhost:5000/records/login",
      data: {
         ...state,
        
      },
    };

    axios(configuration)
    .then((result) => {
      setForm()
      navigate("/album", {state:{firstName: result.data.firstName, lastName: result.data.lastName, relationship: result.data.relationship, email: result.data.email, authorized: result.data.authorized}})
   
    })
    .catch((error) => {console.log(error);})
    

    setForm({email: "", password: "" });
    
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div className="jumbotron jumbotron-fluid">


      <form className="cap-form-formatting " onSubmit={onSubmit}>
        <h3 className='cap-title'>Login</h3>
        
        
        <div className="cap-options-spacing form-group">
          <h6 htmlFor="email">Email</h6>
          <input
            type="text"
            className="form-control"
            id="email"
            value={state.email}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
        </div>
        <div className="cap-options-spacing form-group">
          <h6 htmlFor="password">Password</h6>
          <input
            type="text"
            className="form-control"
            id="password"
            value={state.password}
            onChange={(e) => updateForm({ password: e.target.value })}
          />
        </div>
        
        <div className="d-grid gap-2 mt-3 form-group">
          <input
            type="submit"
            value="Login"
            className="cap-submit-btn btn btn-primary"
          />
          <NavLink className="register_link" to="/register">
            Create a profile
          </NavLink>
          
        </div>        

      </form>
    </div>

  );
}
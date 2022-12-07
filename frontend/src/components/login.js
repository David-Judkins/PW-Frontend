import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios"
import './App.css';

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  
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
         ...form,
        
      },
    };

    axios(configuration)
    .then((result) => {
      console.log(result);
      navigate("/Personal-Website/login")
    })
    .catch((error) => {console.log(error);})
    

    setForm({email: "", password: "" });
    
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div class="jumbotron jumbotron-fluid">


      <form className="cap-form-formatting " onSubmit={onSubmit}>
        <h3 className='cap-title'>Login</h3>
        
        
        <div className="cap-options-spacing form-group">
          <h6 htmlFor="email">Email</h6>
          <input
            type="text"
            className="form-control"
            id="email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
        </div>
        <div className="cap-options-spacing form-group">
          <h6 htmlFor="password">Password</h6>
          <input
            type="text"
            className="form-control"
            id="password"
            value={form.password}
            onChange={(e) => updateForm({ password: e.target.value })}
          />
        </div>
        
        <div className="form-group">
          <input
            type="submit"
            value="Login"
            className="cap-submit-btn btn btn-primary"
          />
        </div>
        

      </form>
    </div>

  );
}
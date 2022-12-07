import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router";
import './App.css';

export default function Create() {
  
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    relationship: "",
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


      <form className="cap-form-formatting " onSubmit={onSubmit}>
        <h3 className='cap-title'>Create New Profile</h3>
        <div className="cap-options-spacing form-group">
          <h6 htmlFor="firstName">First Name</h6>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={form.firstName}
            onChange={(e) => updateForm({ firstName: e.target.value })}
          />
        </div>
        <div className="cap-options-spacing form-group">
          <h6 htmlFor="lastName">Last Name</h6>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={form.lastName}
            onChange={(e) => updateForm({ lastName: e.target.value })}
          />
        </div>


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
        <div className="cap-options-spacing form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="relationshipOptions"
              id="relationshipFriend"
              value="Friend"
              checked={form.relationship === "Friend"}
              onChange={(e) => updateForm({ relationship: e.target.value })}
            />
            <label htmlFor="relationshipFriend" className="form-check-label">Friend</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="relationshipOptions"
              id="relationshipFamily"
              value="Family"
              checked={form.relationship === "Family"}
              onChange={(e) => updateForm({ relationship: e.target.value })}
            />
            <label htmlFor="relationshipFamily" className="form-check-label">Family</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="relationshipOptions"
              id="relationshipWorkRelated"
              value="Work Related"
              checked={form.relationship === "Work Related"}
              onChange={(e) => updateForm({ relationship: e.target.value })}
            />
            <label htmlFor="relationshipWorkRelated" className="form-check-label">Work Related</label>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Profile"
            className=" cap-submit-btn btn btn-primary"
          />
        </div>

      </form>
    </div>

  );
}
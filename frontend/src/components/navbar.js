import React from "react";
import mainLogo from'./logos/logo.png';
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       {/* <NavLink className="navbar-brand " to="/">
       <img style={{"width" : 100 + '%'}} src={mainLogo}></img>
       </NavLink> */}
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav nav-items">
           <li className="nav-item">
             <NavLink className="nav-link" to="/PW-Frontend/register">
               Create A Profile
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/register">
               Climbing
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/register">
               Resume
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}
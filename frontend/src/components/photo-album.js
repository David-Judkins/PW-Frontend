import React, { useState } from "react";
import {useLocation} from 'react-router-dom';

import './App.css';
import Navbar from "./navbar";

export default function PhotoAlbum(){

  const location = useLocation();
  var auth = false;
  
  if(location && location.state && location.state.authorized){
    auth = location.state.authorized
  }
  

  if(auth){
    return(
      <div>Hello world</div>
    )
   }else{
    return(
      <div>You are Unauthorized to enter</div>
    )
   }
 
}

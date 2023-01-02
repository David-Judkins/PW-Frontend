import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes, Navigate } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Create from "./components/create-a-profile";
import Login from "./components/login";
import Album from "./components/photo-album";

 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
     <Route path="/" element={<Navigate to="/login"/>} />
       <Route exact path="/login" element={<Login />} />
       <Route exact path="/register" element={<Create />} />
       <Route exact path="/album" element = {<Album />} />
       
     </Routes>
   </div>
 );
};
 
export default App;
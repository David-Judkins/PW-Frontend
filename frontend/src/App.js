import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes, Navigate } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Create from "./components/create-a-profile";
import Login from "./components/login";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
     <Route path="/PW-Frontend" element={<Navigate to="/PW-Frontend/login"/>} />
       <Route exact path="/PW-Frontend/login" element={<Login />} />
       <Route exact path="/PW-Frontend/register" element={<Create />} />
     </Routes>
   </div>
 );
};
 
export default App;
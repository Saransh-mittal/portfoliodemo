import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Search from "./Search";
import Service from "./Service";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const App = () =>{
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/search" element={<Search/>}/>
      <Route exact path="/services" element={<Service/>}/>
      <Route path="/*" element = {<Navigate to="/" />} />
    </Routes>
    </>
  )
}

export default App;

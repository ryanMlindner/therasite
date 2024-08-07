import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./Displays/Title.js";
import NavBar from "./Interacts/NavBar.js";
import Home from "./Containers/Home.js";
import About from "./Displays/About.js";
import Services from "./Displays/Services.js";
import Location from "./Displays/Location.js";

//TODO transfer class names from js to css if that amount of control is req
//or ask client if they want more of a templated thing and look into
//materialui, skeleton, etc
//also meet for color scheme, layout preferences, etc


//TODO set up switches and routes
//TODO sticky navigation bar at top
//TODO 
const lightText = {
  color: '#EEE'
}

export default function App() {
  return (
    <div className="App">
      <Title/>
      <NavBar/>
      <Home/>
      <About textStyle = {lightText}/>
      <Services/>
      <Location/>
    </div>
  );
}

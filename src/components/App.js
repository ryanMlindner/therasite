import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./Displays/Title.js";
import NavBar from "./Interacts/NavBar.js";
import Home from "./Containers/Home.js";
import About from "./Displays/About.js";
import Services from "./Displays/Services.js";
import Location from "./Displays/Location.js";


//TODO set up switches and routes
/*
<Route exact path="/test">
  <Test/>
</Route>
TODO ask if client wants an SPA with scroll links or multiple display pages
IF SPA: keep this
IF multiple:
<BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
  </Routes>
</BrowserRouter>
*/
export default function App() {
  return (
    <div className="App">
      <Title/>
      <NavBar/>
      <Home/>
      <About/>
      <Services/>
      <Location/>
    </div>
  );
}

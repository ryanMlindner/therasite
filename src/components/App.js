import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./Displays/Title.js";
import NavBar from "./Interacts/NavBar.js";
import Home from "./Containers/Home.js";

//TODO set up switches and routes
/*
<Route exact path="/test">
  <Test/>
</Route>
*/
export default function App() {
  return (
    <div className="App">
      <Title/>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      <header className="App-header">
        <div>Placeholder!</div>
      </header>
    </div>
  );
}

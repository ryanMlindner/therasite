import React from "react";
import { Switch, Route } from "react-router-dom";
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
      <NavBar/>
      <Switch>
        <Route exact path="/home">
          <Home/>
        </Route>
      </Switch>
      <header className="App-header">
        <div>Placeholder!</div>
      </header>
    </div>
  );
}

import { NavLink } from "react-router-dom";

//TODO CSS
//TODO SPA ASK
//<NavLink className="current"
//to="/">Home</NavLink>
export default function NavBar() {
  return (
    <div className="navbar">
      <div className="button">
        Home
      </div>
      <div className="button">
        About
      </div>
      <div className="button">
        Services
      </div>
      <div className="button">
        Location
      </div>
    </div>
  )
}
import { NavLink } from "react-router-dom";

//TODO CSS
export default function NavBar() {
  return (
    <div className="navbar">
      <div className="button">
        <NavLink className="current"
        to="/">Home</NavLink>
      </div>
    </div>
  )
}
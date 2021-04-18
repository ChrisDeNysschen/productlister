import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ title }) => {
  return (
    <nav className="navbar  bg-primary">
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/abouts">About</Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Vermillion Design",
};
export default Navbar;

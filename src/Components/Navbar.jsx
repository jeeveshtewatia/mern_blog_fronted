import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/" className="navlink">
        <div className="main  animate__animated animate__zoomInDown">
          <p>The</p>
          <h1 className="siren">Siren</h1>
        </div>
      </NavLink>
      <div className="navbar">
        <NavLink
          to="/"
          className="navlink animate__animated animate__slideInDown"
        >
          Home
        </NavLink>
        <NavLink
          to="/category/Bollywood"
          className="navlink animate__animated animate__slideInDown"
        >
          Bollywood
        </NavLink>
        <NavLink
          to="/category/Technology"
          className="navlink animate__animated animate__slideInDown"
        >
          Technology
        </NavLink>
        <NavLink
          to="/category/Hollywood"
          className="navlink animate__animated animate__slideInDown"
        >
          Hollywood
        </NavLink>
        <NavLink
          to="/category/Fitness"
          className="navlink animate__animated animate__slideInDown"
        >
          Fitness
        </NavLink>
        <NavLink
          to="/category/Food"
          className="navlink animate__animated animate__slideInDown"
        >
          Food
        </NavLink>
        <NavLink
          to="/category/addBlog"
          className="navlink animate__animated animate__slideInDown"
        >
          Add
        </NavLink>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;

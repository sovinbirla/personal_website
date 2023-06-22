import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Projects from "../pages/Projects.js";
import Contact from "../pages/Contact.js";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [bool_menu, toggle_menu] = useState(false);

  const openMenu = () => toggle_menu(!bool_menu);
  const closeMenu = () => toggle_menu(false);

  return (
    <nav class="navbar">
      <div class="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          Sovin Birla
        </Link>
        <div class="navbar__toggle" onClick={openMenu}>
          {bool_menu ? <FaTimes /> : <FaBars />}
        </div>
        <ul class={bool_menu ? "navbar__menu active" : "navbar__menu"}>
          <li class="navbar__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "navbar__links" + (isActive ? " activated" : "")
              }
              onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li class="navbar__item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                "navbar__links" + (isActive ? " activated" : "")
              }
              onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li class="navbar__item">
            <NavLink
              to="/Projects"
              className={({ isActive }) =>
                "navbar__links" + (isActive ? " activated" : "")
              }
              onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li class="navbar__btn">
            <NavLink to="/contact" className="button" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

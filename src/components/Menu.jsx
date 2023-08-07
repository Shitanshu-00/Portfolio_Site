import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    
      <nav class="nav">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "activeLink" : null)}
        >
          <img src={require("../images/home.png")} class="nav-image" />
        </NavLink>
        <NavLink
          to={"/services"}
          className={({ isActive }) => (isActive ? "activeLink" : null)}
        >
          <img src={require("../images/service.png")} class="nav-image" />
        </NavLink>
        <NavLink
          to={"/project"}
          className={({ isActive }) => (isActive ? "activeLink" : null)}
        >
          <img src={require("../images/folder.png")} class="nav-image" />
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "activeLink" : null)}
        >
          <img src={require("../images/mail.png")} class="nav-image" />
        </NavLink>
      </nav>
  );
}

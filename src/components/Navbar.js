import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul class="nav-links">
        <NavLink to="/">Начало</NavLink>
        <NavLink to="/confirm">Потвърждаване</NavLink>
        <NavLink to="/plan&locations">План и Локации</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;

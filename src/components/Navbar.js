import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="nav-links">
        <NavLink to="/">Начало</NavLink>
        <NavLink to="/confirm">Потвърждаване</NavLink>
        <NavLink to="/plan&locations">План & Локации</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;

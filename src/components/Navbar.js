import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const is404 = location.pathname === "/404";

  return (
    <>
      {!is404 && (
        <nav>
          <ul className="nav-links">
            <NavLink to="/">Начало</NavLink>
            <NavLink to="/invitation">Покана</NavLink>
            <NavLink to="/plan&locations">План & Локации</NavLink>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;

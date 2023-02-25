import React from "react";
import { Link } from "react-router-dom";

function Locations() {
  return (
    <div className="wedding-locations">
      <span className="location-1">
        Ритуална зала -
        <a target="_blank" href="https://tinyurl.com/mtfaknzd">
          ул. "Адриана Будевска" 1
        </a>
      </span>
      <span className="location-2">
        Храм "Св. Троица" -
        <a target="_blank" href="https://tinyurl.com/e94cptf5">
          ул. "Цар Иван Асен" 2
        </a>
      </span>
      <span className="location-3">
        Ресторант "Green Palace" -
        <a target="_blank" href="https://tinyurl.com/2cksnxy6">
          бул. "25 Септември" 1А
        </a>
      </span>
    </div>
  );
}

export default Locations;

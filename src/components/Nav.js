import React, { useState} from "react";
import "./Nav.css";
import logo from '../img/dcicflix.png';

function Nav() {
  const [show] = useState(true);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav__logo"
        src={logo}
        alt="Netflix Logo"
      />
      <ul >
        <li className="menuh">
            Peliculas
        </li>
        <li className="menuh">
            Series
        </li><li className="menuh">
            Documentales
        </li><li className="menuh">
            Trailers
        </li><li className="menuh">
            Mas
        </li>
      </ul>
    </div>
  );
}

export default Nav;

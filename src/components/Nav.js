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
    </div>
  );
}

export default Nav;

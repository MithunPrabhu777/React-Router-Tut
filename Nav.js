import React from "react";
import { Link } from "react-router-dom";
import { GiBrute } from "react-icons/gi";

function Nav() {
  return (
    <nav>
      <h3>
        <GiBrute />
        onster
      </h3>
      <ul className="nav-links">
        <Link to="/">
          <li
            style={{
              color: "white",
            }}
          >
            Home
          </li>
        </Link>
        <Link to="about">
          <li
            style={{
              color: "white",
            }}
          >
            About
          </li>
        </Link>
        <Link to="/shop">
          <li style={{ color: "white" }}>Shop</li>
        </Link>
        <Link to="/contact">
          <li style={{ color: "white" }}>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

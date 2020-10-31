import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>Logo</h1>
      <ul className="nav-links">
        <Link to="about">
          <li style={{ color: "white" }}>About</li>
        </Link>
        <Link to="/shop">
          <li style={{ color: "white" }}>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

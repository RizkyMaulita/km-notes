import React from "react";
import { Link } from "react-router-dom";

export default function Navbar () {
  return (
    <div>
      <nav>
          <ul>
            <li>
              <Link to="/about"> About Page </Link>
            </li>
            <li>
              <Link to="/"> Home Page </Link>
            </li>
            <li>
              <Link to="/profile"> Profile Page </Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}
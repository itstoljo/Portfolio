import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          Matej Tolić
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <Link
              to="/mixing-mastering"
              style={{
                color: "#ffffffff",
                backgroundColor: " 	#44624a",
                border: "2px solid #ffffffff",
              }}
            >
              Mixing & Mastering
            </Link>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

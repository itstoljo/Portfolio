import React from "react";
import "./Header.css"; // Assuming you have a Projects.css file for styling

function Header() {
  return (
    <header className="header">
      <h1>Matej Tolić</h1>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

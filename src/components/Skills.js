import React from "react";
import "./Skills.css"; // Assuming you have a Projects.css file for styling

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="dashed-skills">
          <ul className="skills-list">
            <li>[DJ-ing]</li>
            <li>[Music Production]</li>
            <li>[Mixing & Mastering]</li>
            <li>[Web Development]</li>

            {/* Add more skills as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;

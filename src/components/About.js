import React from "react";

import "./About.css"; // Assuming you have an About.css file for styling
import catImage from "../images/cat.png";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="aligncnt">
          <img src={catImage} alt="Cat Image" />
          <div className="about-text">
            <p>
              {/* Hello! My name is Matej Tolić, and I am a passionate web developer
              with a focus on creating dynamic and responsive web applications.
              I have experience in various technologies including React,
              Node.js, and more. I love solving problems and continuously
              learning new skills to enhance my development capabilities. I also
              do music production, mixing and mastering. i've been DJ-ing for
              over 10 years, and I love to create music in my free time. What
              sets me apart is my unique blend of technical expertise and
              creative flair, which allows me to approach projects with a fresh
              perspective. I am always eager to collaborate on exciting projects
              and contribute to innovative solutions. */}
              Hello! My name is Matej Tolić, and I am a music producer and
              mixing engineer based in Slovenia. With over 10 years of
              experience as a DJ, I’ve developed a unique blend of technical
              expertise and refined taste that allows me to approach every
              project with a fresh perspective. I specialize in music
              production, mixing, mastering. I am always eager to collaborate on
              exciting projects and contribute to innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

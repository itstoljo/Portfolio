import React from "react";
import "./Projects.css"; // Assuming you have a Projects.css file for styling

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>[Delay Calculator (BPM)]</h3>
          <br></br>
          <p>
            [Simple delay calculator made with ChatGPT. It calculates the delay
            in milliseconds based on the BPM (Beats Per Minute) input. This tool
            is useful for musicians and audio engineers to synchronize their
            effects and beats.]
          </p>
          <a
            href="https://itstoljo.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="view-project-btn">View Project</div>
          </a>
        </div>
        {/* Add more project-card divs as needed */}
        <div className="project-card">
          <h3>[Plug-ins Blog]</h3>
          <br></br>
          <p>
            [This is a blog that shows recent audio-production news and archives
            old plug-ins with download links]
          </p>
          <a
            href="https://bedroomproducersblog.com/
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="view-project-btn">View Project</div>
          </a>
        </div>

        <div className="project-card">
          <h3>[Printables]</h3>
          <br></br>
          <p>
            [This is a collection of my 3D models that I have created over the
            years.]
          </p>
          <a
            href="https://www.printables.com/@MatejTolic_1950022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="view-project-btn">View Project</div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

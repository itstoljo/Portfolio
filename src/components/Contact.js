import React from "react";
import "./Contact.css"; // Assuming you have a Contact.css file for styling

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:matej.tolic1@gmail.com">[send me a message]</a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/matej-toli%C4%87-962945165/"
          target="_blank"
          rel="noopener noreferrer"
        >
          [My LinkedIn]
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/itstoljo"
          target="_blank"
          rel="noopener noreferrer"
        >
          [My Github]
        </a>
      </p>

      <p>
        SoundCloud:{" "}
        <a
          href="https://soundcloud.com/tolja"
          target="_blank"
          rel="noopener noreferrer"
        >
          [SoundCloud]
        </a>
      </p>

      {/* <div
        class="tenor-gif-embed"
        data-postid="24609305"
        data-share-method="host"
        data-aspect-ratio="1.77778"
        data-width="100%"
    
        <a href="https://tenor.com/view/jackie-chan-drunken-master-drunken-fist-gif-24609305">
          Jackie Chan Drunken Master GIF
        </a>
        from{" "}
        <a href="https://tenor.com/search/jackie+chan-gifs">Jackie Chan GIFs</a>
      </div>
      <script
        type="text/javascript"
        async
        src="https://tenor.com/embed.js"
      ></script> */}
      {/* Optional: Add a contact form here */}
    </section>
  );
}

export default Contact;

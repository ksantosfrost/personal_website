// src/pages/Home.js
import React from 'react';
import './Home.css';


function Home() {
  return (
    <section className="home">
      {/* Left side: your existing content */}
      <div className="home-content">
        <h1>Hello, I'm Keanu Santos-Frost</h1>
        <h3>Student</h3>
        <p>
          I am currently a third year at UCSD pursuing a B.S. in Computer Science. 
          I am open and looking for internships and possible job offers!
          Feel free to connect with me!
        </p>
        <div className="button">
          <a href="#">Hire Me</a>
          <a href="#">Connect</a>
        </div>

        <div className="home-sci">
          <a href="#"><i className="bx bxl-linkedin"></i></a>
          <a href="#"><i className="bx bxl-discord-alt"></i></a>
          <a href="#"><i className="bx bxl-github"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Home;

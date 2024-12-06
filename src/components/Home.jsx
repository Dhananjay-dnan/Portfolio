import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Dhananjay K. I'm a Full Stack Developer.</p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>
    </section>
  );
}

export default Home;


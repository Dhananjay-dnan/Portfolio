import React from 'react';
import './About.css';
import DevImage from './devimg.jpg';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Dhananjay K, a passionate [Your Profession/Title] with [X] years of experience.
            I specialize in [Your Skills/Expertise]. My goal is to [Your Professional Goal].
          </p>
          <p>
            When I'm not coding, you can find me [Your Hobbies/Interests].
          </p>
        </div>
        <div className="about-image">
          <img src={DevImage} alt="Your Name" />
        </div>
      </div>
    </section>
  );
}
export default About;


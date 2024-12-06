import React from 'react';
import './Projects.css';
import DevImage from './devimg.jpg';


function Projects() {
  const projects = [
    { id: 1, title: 'E-Commerce Website', description: 'E Commerce website for gifts', image: DevImage },
    { id: 2, title: 'Fodmap', description: 'Food Delivery Application', image: DevImage },
    { id: 3, title: 'Musical', description: 'Get all your playlist together', image: DevImage },
  ];

  const styles = {
    card: {
      animation: 'slideIn 5s ease-out',
    },
    '@keyframes slideIn': {
      from: {
        opacity: 0,
        transform: 'translateX(-100%)',
      },
      to: {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },
  };

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} style={styles.card} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href="#" className="project-link">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;


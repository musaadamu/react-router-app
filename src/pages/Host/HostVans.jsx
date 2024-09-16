import React from 'react'

import './HostVans.css';

export default function Projects() {
  // List of project image URLs and descriptions
  const projects = [
    {
      src: 'src/assets/home-hero.png',
      alt: 'Project 1',
      title: 'Machine Learning Model for Image Classification',
    },
    {
      src: 'src/assets/home-hero.png',
      alt: 'Project 2',
      title: 'Web Application using MERN Stack',
    },
    {
      src: 'src/assets/home-hero.png',
      alt: 'Project 3',
      title: 'IoT Embedded System for Home Automation',
    },
    {
      src: 'src/assets/home-hero.png',
      alt: 'Project 4',
      title: 'Deep Learning NLP Project in Hausa Language',
    },
    {
      src: 'src/assets/home-hero.png',
      alt: 'Project 5',
      title: 'AI-powered Predictive Maintenance System',
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.src}
              alt={project.alt}
              className="project-image"
            />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

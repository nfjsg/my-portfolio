import React from 'react';
import './Project.css'; // Import your Project-specific styles

const Project = ({ title, description, demoLink, githubLink }) => {
  return (
    <div className="project-container">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;

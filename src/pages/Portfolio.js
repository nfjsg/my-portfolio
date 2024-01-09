
import React from 'react';
import Project from '../components/Project/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1.',
      demoLink: 'https://project1demo.com',
      githubLink: 'https://github.com/yourusername/project1',
    },
    // Add more projects as needed
  ];

  return (
    <div className="portfolio-container">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

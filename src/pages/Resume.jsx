import React from 'react';

const Resume = () => {
  const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'Git'];

  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <p>
        Download my resume{' '}
        <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
          here
        </a>
      </p>

      <div className="skills-list">
        <h3>Skills:</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;

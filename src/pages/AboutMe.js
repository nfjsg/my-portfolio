
import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <img
          src="your-avatar-image-url.jpg"
          alt="Your Avatar"
          className="avatar"
        />
        <p className="bio">
          Write a short bio about yourself. Highlight your skills, interests,
          and experiences as a web developer.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

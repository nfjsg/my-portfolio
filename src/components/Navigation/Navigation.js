
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'; // Import your Navigation-specific styles

const Navigation = ({ currentSection, setCurrentSection }) => {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav className="navigation-container">
      <ul className="navigation-list">
        {sections.map((section) => (
          <li key={section}>
            <NavLink
              to={`/${section.toLowerCase().replace(' ', '')}`}
              activeClassName="active"
              onClick={() => setCurrentSection(section)}
            >
              {section}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

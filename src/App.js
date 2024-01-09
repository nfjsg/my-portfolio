
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css'; // Import your main CSS file
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');

  return (
    <Router>
      <div>
        <Header />
        <Navigation
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />

        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

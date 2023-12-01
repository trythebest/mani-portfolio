import React from 'react';
import './App.css';
import About from './components/about/about.js';
import Home from './components/home/Home.js';
import Projects from './components/projects/projects.js';
import NavBar from './components/Navbar/Navbar.js';
import Skills from './components/skills/skills.js';
import Contact from './components/contact/contact.js';
import Float from './components/Links/Links.js';

function App() {
  
  return (
    <div className='App'>
      <NavBar/>
      <Home  />
      <Float/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
     
      
    </div>
  );
}

export default App;

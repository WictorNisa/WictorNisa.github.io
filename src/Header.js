import React from "react";
import Hamburger from './Hamburger';
import {slide as Menu} from 'react-burger-menu';

function header() {
  return (
    <section className="hero-section" id="home">
     <Hamburger/>
      <div className="hero-overlay">
      <nav className="slide-in-blurred-top">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="#aboutme">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
        <div className="hero-text-contain">
          <h1 className="h1-hero-left slide-in-blurred-left">Wictor</h1>
          <h1 className="h1-hero-right slide-in-blurred-right">Niså</h1>
        </div>
        <div className="welcome-contain fade-in">
            <p className="welcome-p">Front-End Developer with a huge interest in design and making games in Unity. Take a look at my
            recent projects</p>
            <a className="project-a" href="#projects">PROJECTS</a>
        </div>
      </div>
    </section>
  );
}
export default header;

import React from "react";
import Hamburger from './Hamburger';
import {slide as Menu} from 'react-burger-menu';

function header() {
  return (
    <section className="hero-section" id="home">
     <Hamburger/>
      <div className="hero-overlay">
        <div className="hero-text-contain">
          <h1 className="h1-hero-left slide-in-blurred-left">Wictor</h1>
          <h1 className="h1-hero-right slide-in-blurred-right">Niså</h1>
        </div>
        <div className="welcome-contain fade-in">
            <p className="welcome-p">Front-End Developer with a huge interest in design and making games in Unity. Take a look at my
            recent projects</p>
            <button className="project-button"><a href="#projects">PROJECTS</a></button>
        </div>
      </div>
    </section>
  );
}
export default header;

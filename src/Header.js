import React from "react";

function header() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <header></header>
        <div className="hero-text-contain">
          <h1 className="h1-hero-left slide-in-blurred-left">Wictor</h1>
          <h1 className="h1-hero-right slide-in-blurred-right">Niså</h1>
        </div>
        <div className="welcome-contain fade-in">
            <p className="welcome-p">Front-End Developer with a huge interest in design. Take a look at my
            recent projects</p>
            <button className="project-button">Check it out</button>
        </div>
      </div>
    </section>
  );
}
export default header;

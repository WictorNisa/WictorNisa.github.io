import React from "react";

function projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="custom-shape-divider-top-1611002279">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
    </svg>
</div>
    <h2 className="project-h2">My Projects</h2>
    <div className="project-wrapper">
        <div className="project-container" id="project1">
        <h3><a href="https://visualizar-9141e.web.app/" target="_blank">Visualizar</a></h3> 
        <div className="project-overlay">
        
        <p className="overlay-p">Visualizar is a photo sharing app that I worked on with two of my friends. We made this MVP in 2 weeks
        using, firebase and react mainly. I took the lead on the design aspect of the project and I was pretty 
        happy with the result.</p>

        <a className="project-a" href="https://visualizar-9141e.web.app/" target="_blank">Visit</a>
        </div>    
        </div>


        <div className="project-container" id="project2">
        <h3><a href="https://nisa.design" target="_blank">Anna Nisa Design</a></h3>
        <div className="project-overlay">
        
        <p className="overlay-p">Anna Nisa Design is a webpage I made for a client that works with crafting. The webpage is build with 
        HTML, CSS and vanilla JS.   </p>
        <a className="project-a" href="https://nisa.design" target="_blank">Visit</a>
        </div>     
        </div>
    </div>
    </section>
  );
}
export default projects;
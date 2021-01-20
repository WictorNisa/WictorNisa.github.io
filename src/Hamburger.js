import { stack as Menu } from 'react-burger-menu';
import React from "react";

class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="home">Home</a>
        <a id="about" className="menu-item" href="#aboutme">About</a>
        <a id="contact" className="menu-item" href="#projects">Projects</a>
        <a id="contact" className="menu-item" href="#contact">Contact</a>
      </Menu>
    );
  }
}
export default Hamburger;
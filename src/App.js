
import './App.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <About/>
      <Projects/>
    </div>
  );
}

export default App;

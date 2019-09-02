import React from 'react';
import { Route, Link } from "react-router-dom";
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Nav extends React.Component {
  render() {
    return (
      <div className='Navstuff'>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Projects">Portfolio</Link>
          <Link to="/Contact">Contact</Link>
        </nav>

        <Route path="/" exact render={() =>
          <About />} />
        <Route path='/Projects' render={() =>
          <Projects />} />
        <Route path='/Contact' render={() =>
          <Contact />} />
      </div>
    )
  }
}

export default Nav;
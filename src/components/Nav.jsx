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
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/Projects">Portfolio</Link> </li>
            <li> <Link to="/Contact">Contact</Link> </li>
          </ul>
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
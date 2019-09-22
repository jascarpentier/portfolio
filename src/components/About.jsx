import React from 'react';
import Header from './Header'

class About extends React.Component {
  render() {
    return (
      <div className='aboutMe'>
        <h1 className='headerName'>Jasmine Carpentier</h1>
        <img className="hero" src="https://imgur.com/5FrjTyQ.jpeg" alt="header" />

        <Header />
      </div >
    )
  }
}

export default About;
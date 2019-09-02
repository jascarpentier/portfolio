import React from 'react';
import Header from './Header'

class About extends React.Component {
  render() {
    return (
      <div className='aboutMe'>
        <h1>hello</h1>
        <img className="headerPhoto" src="https://i.imgur.com/CYWWQCK.jpg" alt="header" />
        <Header />
      </div >
    )
  }
}

export default About;
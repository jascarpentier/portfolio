import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className='frontPage'>
          <div className='header'>
            <img className="headerPhoto" src="https://i.imgur.com/CYWWQCK.jpg" alt="header" />
          </div>
          <div className='aboutText'>
            <h1>About me</h1>
            <p>I am an adaptable Front-End Developer and Marketing professional who loves using technology to create new communities and help companies and brands tell their story. My experience in both marketing and development gives me the unique ability to craft relatable narratives that are accompanied by stunning visual presentations.</p>
          </div>
        </div>


        <div className='skills'>
          <h3>Skills & Tools</h3>
          <img className='iconSkills' src='https://i.imgur.com/xwLfHEN.png' alt='github' />
          <img className='iconSkills' src='https://i.imgur.com/D1G8jr7.png' alt='github' />
          <img className='iconSkills' src='https://i.imgur.com/z0kUmXJ.png' alt='github' />
          <img className='iconSkills' src='https://i.imgur.com/URWnWo4.png' alt='github' />
          <img className='iconSkills' src='https://i.imgur.com/ciruipm.png' alt='github' />
          <img className='iconSkills' src='https://i.imgur.com/Iyq0G00.png' alt='github' />
          <img className='iconSkills' src='https://i.imgur.com/7xaAKtV.png' alt='github' />
          <img className='iconSkills' src='https://i.imgur.com/2eXljUN.png' alt='github' />
          <img className='iconSkills' src='https://i.imgur.com/TE0JfO8.png' alt='github' />
          <img className='iconSkills' src='https://i.imgur.com/RjV1bOm.png' alt='github' />
          <img className='iconSkills' src='https://i.imgur.com/IEYpEQf.png' alt='github' />
          <img className='iconSkills' src='https://i.imgur.com/sviC6NO.png' alt='github' />
          <img className='iconSkills' src='https://i.imgur.com/wHpDY1p.png' alt='github' />
          <img className='iconSkills' src='https://i.imgur.com/1t4j8lr.png' alt='github' />
          <img className='iconSkills' src='https://i.imgur.com/AqboT1d.png' alt='github' />
          <img className='iconSkills' src='https://i.imgur.com/q4MwwtZ.png' alt='github' />
          <img className='iconSkills' src='https://i.imgur.com/IXpHtqv.png' alt='github' />
        </div>
      </div>

    )
  }
}

export default Header;
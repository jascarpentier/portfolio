import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div className='projectStuff'>
        <h1>Portfolio</h1>
        <div className='projectThings'>
          <h5>Harbour</h5>
          <img className='projects' src="https://i.imgur.com/8kbGV5x.png" alt="harbour" />
          <div class="middle">
            <div class="text">John Doe</div>
          </div>

          <a className='porfolioText' href='www.harbour.surge.sh'>Visit the site</a>
          <a className='porfolioText' href='https://github.com/jascarpentier/harbour'>View on github</a>
          <h5>Cara Mia</h5>
          <img className='projects' src="https://i.imgur.com/298Dyzp.png" alt="cara mia" />
          <a className='porfolioText' href='www.cara-mia-redesign.surge.sh'>Visit the site</a>
          <a className='porfolioText' href='https://github.com/mishakessler/cara-mia-redesign'>View on github</a>
          <h5>Space Cadet</h5>
          <img className='projects' src="https://i.imgur.com/EIfmjdJ.png" alt="space cadet" />
          <a className='porfolioText' href='www.spacecadet.surge.sh'>Visit the site</a>
          <a className='porfolioText' href='https://github.com/jascarpentier/spacecadet'>View on github</a>
          <h5>Stay Dry</h5>
          <img className='projects' src="https://i.imgur.com/XXT7tz2.png" alt="stay dry" />
          <a className='porfolioText' href='http://staydry.surge.sh/'>Visit the site</a>
          <a className='porfolioText' href='https://github.com/jascarpentier/magic-seaweed'>View on github</a>
        </div >
      </div >
    )
  }
}

export default Projects;
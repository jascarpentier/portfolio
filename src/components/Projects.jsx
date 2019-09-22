import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div className='projectStuff'>
        <h1 className='portfolioH1'>Portfolio</h1>


        <div className='projectH1'>
          <h5>Harbour</h5>
        </div>
        <div className='projectThings'>
          <img className='projects' src="https://i.imgur.com/8kbGV5x.png" alt="harbour" />
          <div class="middle">
            <div class="text">Multi-user interactive Hostel collective. React-on-rails full stack project.</div>
          </div>
        </div>
        <div className='porjectLinks'>
          <a className='porfolioText' href='http://harbour.surge.sh/'>Visit the site</a>
          <a className='porfolioText' href='https://github.com/jascarpentier/harbour'>View on github</a>
        </div>


        <div className='projectH1'>
          <h5>Cara Mia</h5>
        </div>
        <div className='projectThings'>
          <img className='projects' src="https://i.imgur.com/298Dyzp.png" alt="cara mia" />
          <div class="middle">
            <div class="text">Remake of a local Italian restaurant in collaboration with the UXDI students</div>
          </div>
        </div>
        <div className='porjectLinks'>
          <a className='porfolioText' href='http://cara-mia-redesign.surge.sh/'>Visit the site</a>
          <a className='porfolioText' href='https://github.com/mishakessler/cara-mia-redesign'>View on github</a>
        </div>


        <div className='projectH1'>
          <h5>Space Cadet</h5>
        </div>
        <div className='projectThings'>
          <img className='projects' src="https://i.imgur.com/EIfmjdJ.png" alt="space cadet" />
          <div class="middle">
            <div class="text">An E-Commerce store for books using the Google Books API</div>
          </div>
        </div>
        <div className='porjectLinks'>
          <a className='porfolioText' href='http://spacecadet.surge.sh/'>Visit the site</a>
          <a className='porfolioText' href='https://github.com/jascarpentier/spacecadet'>View on github</a>
        </div>


        <div className='projectH1'>
          <h5>Stay Dry</h5>
        </div>
        <div className='projectThings'>
          <img className='projects' src="https://i.imgur.com/XXT7tz2.png" alt="stay dry" />
          <div class="middle">
            <div class="text">Using the REI climbing API and the Open Weather API to make a climbing app to see the local weather and information on climbing routes</div>
          </div>
        </div>
        <div className='porjectLinks'>
          <a className='porfolioText' href='http://staydry.surge.sh/'>Visit the site</a>
          <a className='porfolioText' href='https://github.com/jascarpentier/magic-seaweed'>View on github</a>
        </div>
      </div >

    )
  }
}

export default Projects;
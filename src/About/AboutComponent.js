import React from 'react';
import './About.css';

function AboutComponent() {
  return (
    <div className='about-component'>
      <h1 className='about'>
        About Me
      </h1>
      <div className='row'>
        <div className='column'>
        <p>
          Hi! I am RJ Bamrah, and I am a Full Stack Software Engineer from the Bay Area. My passion for web 
          development was sparked when I realized that I could create something by my own hand. There is 
          nothing more I love than creating functional websites!
        </p>
        </div>
        <div className='column'>
        <h2 className='tech'>Technologies</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur.
        </p>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent;
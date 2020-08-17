import React from 'react';
import './Intro.css';
import personal from '../img/personal.png'

function IntroComponent() {
  return (
    <div className='intro-component'>
      <img
        src={personal}
        className='personal'
        alt='personal'
      ></img>
      <h1 className='intro-name'>
        Ripujit (RJ) Bamrah
      </h1>
      <h3 className='intro-description'>
        Full Stack Software Engineer
      </h3>
      <h3 className='intro-location'>
        Bay Area, California
      </h3>
    </div>
  )
}

export default IntroComponent;
import React from 'react';
import './Intro.css';
import personal from '../img/personal.png'
import githubwhite from '../img/githubwhite.png';
import linkedinwhite from '../img/linkedinwhite.png';
import mailwhite from '../img/mailwhite.png';

function IntroComponent(props) {
  const { gitLink, profileLink } = props;

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
      <img 
        className='white-logo'
        src={githubwhite}
        alt='white-github-logo'
        onClick={gitLink}
      ></img>
      <img
        className='white-logo'
        src={linkedinwhite}
        alt='white-linkedin-logo'
        onClick={profileLink}
      ></img>
      <a className='scroll' href='#contact-id' style={{scrollBehavior: 'smooth'}}>
        <img
          className='white-logo'
          src={mailwhite}
          alt='white=mail-icon'
        ></img>
      </a>
    </div>
  )
}

export default IntroComponent;
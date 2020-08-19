import React from 'react';
import './About.css';
import css from '../img/css-logo.svg';
import html from '../img/html-logo.svg';
import js from '../img/js-logo.svg';
import node from '../img/node-logo.svg';
import logo from '../img/react-logo.svg';
import sql from '../img/sql-logo.svg';

function AboutComponent() {
  return (
    <div className='about-component'>
      <h1 className='about'>
        About Me
      </h1>
      <div className='row'>
        <div className='about-column'>
        <p>
          Hi! I am RJ Bamrah, and I am a<br /> Full Stack Software Engineer from the Bay Area.<br /> My passion for web 
          development was sparked<br /> when I realized that I could create something<br /> by my own hand. There is 
          nothing more I love<br /> than creating functional websites!
        </p>
        </div>
        <div className='column'>
          <h2 className='tech'>Web Dev Technologies That I Use</h2>
          <img className='logos' src={html} alt='html' />
          <img className='logos' src={css} alt='css' />
          <img className='logos' src={js} alt='javascript' />
          <img className='logos' src={node} alt='node' />
          <img className='logos' src={logo} alt='react' />
          <img className='logos' src={sql} alt='sql' />
        </div>
      </div>
    </div>
  )
}

export default AboutComponent;
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
          <div>
            <img className='logos' src={html} alt='html' />
            <img className='logos' src={css} alt='css' />
            <p className='html-caption'>HTML</p> 
            <p className='css-caption'>CSS</p>
          </div>
          <div>
            <img className='logos' src={js} alt='javascript' />
            <img className='logos' src={node} alt='node' />
            <p className='js-caption'>JavaScript</p> 
            <p className='node-caption'>Node.js<br /> and<br /> Express.js</p>
          </div>
          <div>
            <img className='logos' src={logo} alt='react' />
            <img className='logos' src={sql} alt='sql' />
            <p className='react-caption'>React</p> 
            <p className='sql-caption'>SQL</p>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default AboutComponent;
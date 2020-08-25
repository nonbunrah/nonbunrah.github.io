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
      <p className='about-line'>___________________________________</p>
      <div className='row'>
        <div className='about-column'>
        <h2 className='background'>Background</h2>
        <p className='background-line'>_____________________________</p>
        <p className='about-description'>
          Hi! I am RJ Bamrah, a Full Stack Software Engineer from the Bay Area and I LOVE making websites! My passion for web 
           development was sparked when I realized that I could create something by my own hand. <br /><br />
           Some background about me, I graduated from the University of Nevada - Reno with a Bachelors degree in Information Systems
           and a minor in Cyber Security. 
           {/*There is nothing more I love than creating functional websites! <br />  */}
        </p>
        </div>
        <div className='column'>
          <h2 className='tech'>Web Dev Technologies That I Use</h2>
          <p className='tech-line'>________________________________________________________</p>
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
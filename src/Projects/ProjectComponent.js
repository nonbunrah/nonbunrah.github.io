import React from 'react';
import './Projects.css';
import fourthProject from '../img/fourthProject.png';
import bcounter from '../img/bcounter.png';
import imac from '../img/iMac.png';
import imacBCounter from '../img/iMacBCounter.png';
import firstProject from '../img/firstproject.png';

// TODO: 
// need to get div to move on imac pic hover

function ProjectComponent() {
  return (
    <div className='allProjectComponent'>
      <div className='projectComponent1'>
        <div className='imac-with-project'>
          <div className='first-overlay'>
          <br /><br /><br /><br /><br /><br /><br /><br />
            <h1 className='title-application'>Full Stack Calendar Scheduling Application</h1>
            <p className='title-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <h1 className='projects'>Projects</h1>
          <p className='projects-line'>___________________________________</p>
          <div className='images'>
            <img
              src={imac}
              alt='imac'
              className='imac'
            ></img>
            <img
              src={fourthProject}
              alt='fourth-project-pic'
              className='fourth-project-pic'
            ></img>
          </div>
        </div>
      </div>
      <div className='projectComponent2'>
        <div className='imac-with-project'>
          <img
            src={imacBCounter}
            alt='imac'
            className='imac'
          ></img>
          <img
            src={bcounter}
            alt='bcounter-pic'
            className='bcounter'
          ></img>
        </div>
      </div>
      <div className='projectComponent3'>
        <div className='imac-with-project'>
          <img
            src={imac}
            alt='imac'
            className='imac'
          ></img>
          <img
            src={firstProject}
            alt='first-project-pic'
            className='first-project-pic'
          ></img>
        </div>
      </div>
    </div>
  )
}

export default ProjectComponent;
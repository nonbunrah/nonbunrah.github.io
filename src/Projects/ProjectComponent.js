import React from 'react';
import './Projects.css';
import fourthProject from '../img/fourthProject.png';
import imac from '../img/iMac.png';

function ProjectComponent() {
  return (
    <div className='projectComponent'>
      <div className='imac-with-project'>
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
      {/* <div className='hidden-text'>
        <h1>Full Stack Calendar Scheduling App</h1>
      </div> */}
      {/* <div className='trans'></div> */}
    </div>
  )
}

export default ProjectComponent;
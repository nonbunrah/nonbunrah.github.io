import React from 'react';
import './Projects.css';
import fourthProject from '../img/fourthProject.png';
import bcounter from '../img/bcounter.png';
import imac from '../img/iMac.png';
import imacBCounter from '../img/iMacBCounter.png';
import firstProject from '../img/firstproject.png';

// need to get div to cover fourth project pic
// need to get div to move on imac pic hover

function ProjectComponent() {
  return (
    <div className='projectComponent'>
      <div className='imac-with-project'>
        <div className='first-overlay'>
          <h1 className='hey'>hey</h1>
        </div>
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
      {/* <div className='hidden-text'>
        <h1>Full Stack Calendar Scheduling App</h1>
      </div> */}
      {/* <div className='trans'></div> */}
    </div>
  )
}

export default ProjectComponent;
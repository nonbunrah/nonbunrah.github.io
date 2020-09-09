import React, {useState} from 'react';
import './Projects.css';
import fourthProject from '../img/fourthProject.png';
import bcounter from '../img/bcounter.png';
import imac from '../img/iMac.png';
import imacBCounter from '../img/iMacBCounter.png';
import firstProject from '../img/firstproject.png';

function ProjectComponent() {

  const [isOneOpen, setOneOpen] = useState(false);
  const [isTwoOpen, setTwoOpen] = useState(false);
  const [isThreeOpen, setThreeOpen] = useState(false);

  return (
    <div className='allProjectComponent'>
      <h1 className='projects'>Projects</h1>
      <p className='projects-line'>___________________________________</p>
      <div className='projectComponent1' >
        <div className='imac-with-project'> 
          <div className='first-overlay' 
            style={isOneOpen ? {left: "0"} : {}} 
            onMouseEnter={() => setOneOpen(true)}
            onMouseLeave={() => setOneOpen(false)}
            >
          <br /><br /><br /><br /><br /><br /><br /><br />
            <h1 className='title-application'>Full Stack Calendar Scheduling Application</h1>
            <p className='title-tech'>Technologies used: React.js, Node.js, Express.js, SQL</p>
            <p className='title-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='images'
          // leave commented
          // onMouseEnter={() => setOpen(true)}
          // onMouseLeave={() => setOpen(false)}
          >
            <img
              src={imac}
              alt='imac'
              className='imac'
              onMouseEnter={() => setOneOpen(true)}
              onMouseLeave={() => setOneOpen(false)}
            ></img>
            <img
              src={fourthProject}
              alt='fourth-project-pic'
              className='fourth-project-pic'
              onMouseEnter={() => setOneOpen(true)}
              onMouseLeave={() => setOneOpen(false)}
            ></img>
          </div>
        </div>
      </div>
      <div className='projectComponent2'>
        <div className='imac-with-project'>
          <div className='second-overlay' 
              style={isTwoOpen ? {left: "0"} : {}} 
              onMouseEnter={() => setTwoOpen(true)}
              onMouseLeave={() => setTwoOpen(false)}
              >
            <br /><br /><br /><br /><br /><br /><br /><br />
              <h1 className='title-application'>BCounter</h1>
              <p className='title-tech'>Technologies used: React.js, Node.js, Express.js, SQL</p>
              <p className='title-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='images'
            // leave commented
            // onMouseEnter={() => setTwoOpen(true)}
            // onMouseLeave={() => setTwoOpen(false)}
            >
            <img
              src={imacBCounter}
              alt='imac'
              className='imac'
              onMouseEnter={() => setTwoOpen(true)}
              onMouseLeave={() => setTwoOpen(false)}
            ></img>
            <img
              src={bcounter}
              alt='bcounter-pic'
              className='bcounter'
              onMouseEnter={() => setTwoOpen(true)}
              onMouseLeave={() => setTwoOpen(false)}
            ></img>
          </div>
        </div>
      </div>
      <div className='projectComponent3'>
        <div className='imac-with-project'>
        <div className='third-overlay' 
            style={isThreeOpen ? {left: "0"} : {}} 
            onMouseEnter={() => setThreeOpen(true)}
            onMouseLeave={() => setThreeOpen(false)}
            >
          <br /><br /><br /><br /><br /><br /><br /><br />
            <h1 className='title-application'>Car Quiz Front End Project</h1>
            <p className='title-tech'>Technologies used: HTML/CSS, JavaScript</p>
            <p className='title-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='images'
          // leave commented
          // onMouseEnter={() => setOpen(true)}
          // onMouseLeave={() => setOpen(false)}
          >
          <img
            src={imac}
            alt='imac'
            className='imac'
            onMouseEnter={() => setThreeOpen(true)}
            onMouseLeave={() => setThreeOpen(false)}
          ></img>
          <img
            src={firstProject}
            alt='first-project-pic'
            className='first-project-pic'
            onMouseEnter={() => setThreeOpen(true)}
            onMouseLeave={() => setThreeOpen(false)}
          ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectComponent;
import React from 'react';
// import Sidebar from './Sidebar/Sidebar';
import IntroContainer from './Intro/IntroContainer';
import AboutComponent from './About/AboutComponent';
import ProjectContainer from './Projects/ProjectContainer';
import Footer from './Header/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <IntroContainer />
      <AboutComponent />
      <ProjectContainer />
      <Footer />
    </div>
  );
}

export default App;

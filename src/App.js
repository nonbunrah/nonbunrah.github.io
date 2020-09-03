import React from 'react';
// import Sidebar from './Sidebar/Sidebar';
import IntroContainer from './Intro/IntroContainer';
import AboutComponent from './About/AboutComponent';
import ProjectContainer from './Projects/ProjectContainer';
import ContactForm from './Contact/ContactComponent';
import Footer from './Header/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <IntroContainer />
      <AboutComponent />
      <ProjectContainer />
      <ContactForm />
      <hr />
      <Footer />
    </div>
  );
}

export default App;

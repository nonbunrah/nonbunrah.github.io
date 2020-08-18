import React from 'react';
import HeaderContainer from './Header/HeaderContainer';
import IntroComponent from './Intro/IntroComponent';
import AboutComponent from './About/AboutComponent';
import Footer from './Header/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <IntroComponent />
      <AboutComponent />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import HeaderContainer from './Header/HeaderContainer';
import IntroComponent from './Intro/IntroComponent';
import Footer from './Header/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <IntroComponent />
      <Footer />
    </div>
  );
}

export default App;

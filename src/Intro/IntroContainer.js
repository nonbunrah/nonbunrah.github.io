import React from 'react';
import IntroComponent from './IntroComponent';

let gitLink = () => {
  window.open('https://github.com/nonbunrah');
};

let profileLink = () => {
  window.open('https://www.linkedin.com/in/nonbunrah/');
};

function IntroContainer() {
  return (
    <div>
      <IntroComponent gitLink={gitLink} profileLink={profileLink} />
    </div>
  )
}

export default IntroContainer;
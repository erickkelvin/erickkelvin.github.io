import React from 'react';
import profilePicture from '../images/profile.jpg';

const App = () => {
  return (
    <div className="main">
      <div className="profile">
        <img className="profile__picture" alt="profile" src={profilePicture}></img>
        <div className="profile__title">
          Erick Kelvin
        </div>
        <div className="profile__subtitle">
          Front-end Developer
        </div>
        <div className="profile__links">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/erickkelvin">
            <i className="fa fa-github"></i> GitHub
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/erick-santos-b7436611a/">
            <i className="fa fa-linkedin-square"></i> LinkedIn
          </a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:erickkelvin@hotmail.com">
            <i className="fa fa-envelope"></i> E-mail
          </a>
        </div>
      </div>
    </div>

  );
};

export default App;
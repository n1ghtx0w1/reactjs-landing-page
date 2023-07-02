import React from 'react';
import crew from '../assets/crew.mp4';

const Main = () => {
  return (
    <div className="main-container">
      <div className="overlay"></div>
      <video src={crew} autoPlay loop muted />

      <div className="content">
        <div className="row">
          <button className="enter-button">ENTER</button>
        </div>
        <div className="row">
          <div className="copyright">
            &copy; 2023 The Crew
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

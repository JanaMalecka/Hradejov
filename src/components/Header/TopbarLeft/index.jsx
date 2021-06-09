import React from 'react';
import './style.css';
import logoUrl from './img/logo.png';
/* import faceUrl from './img/face.png'; */

const TopbarLeft = () => {
  return (
    <div className="topbar-left">
      <a href="#home">
        <img
          className="site-logo swing"
          src={logoUrl}
          alt="otevřená kniha s názvem Hradějov jako logo stránek"
        />
      </a>
      {/*  <div className="icons">
        <a href="https://www.facebook.com/hradejov.cz/">
          <img className="icon-fb" src={faceUrl} alt="ikonka Facebooku" />
        </a>
      </div> */}
    </div>
  );
};
export default TopbarLeft;

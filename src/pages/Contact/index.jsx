import React from 'react';
import './style.css';
import faceUrl from './img/face.png';

const Contact = () => {
  return (
    <div className="container">
      <h1>Kontakt</h1>
      <div className="contact-wrapper">
        <div className="face-wrapper">
          <div className="icons">
            <a
              href="https://www.facebook.com/search/top/?q=hrad%C4%9Bjov"
              target="_blank"
            >
              <img className="icon-fb" src={faceUrl} alt="ikonka Facebooku" />
            </a>
          </div>
        </div>
        <p>Email: info@hradejov.cz</p>
      </div>
    </div>
  );
};

export default Contact;

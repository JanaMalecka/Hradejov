import React from 'react';
import './style.css';
import faceUrl from './img/face.png';
import Form from '../../components/Form';

const Contact = () => {
  return (
    <div className="container">
      <h1 className="title swing">Kontakt</h1>
      <div className="contact-wrapper">
        <div className="icons">
          <a
            href="https://www.facebook.com/hradejov.cz/"
            /* target="_blank" */
          >
            <img
              className="icon-fb swing"
              src={faceUrl}
              alt="ikonka Facebooku"
            />
          </a>
        </div>
        <p>
          Email: <a href="mailto:info@hradejov.cz">info@hradejov.cz</a>
        </p>
      </div>
      {/* <Form /> */}
    </div>
  );
};

export default Contact;

import React from 'react';
import './style.css';
import faceUrl from './img/face.png';
import Form from '../../components/Form';

const Contact = () => {
  return (
    <div className="container">
      <h1 className="title swing">Kontakt</h1>
      <div className="contact-first">
        <span className="first-letter">M</span>arie{' '}
        <span className="first-letter">N</span>ovotná
      </div>
      <div className="contact-first contact-first--small">
        (produktová manažerka)
      </div>
      <div className="contact-first">
        <span className="first-letter">R</span>oman{' '}
        <span className="first-letter">D</span>oušek
      </div>
      <div className="contact-first contact-first--small">(autor her)</div>
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
          Email: <a href="mailto:novotna.m2@gmail.com">novotna.m2@gmail.com</a>
        </p>
      </div>
      <Form />
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import Button from '../Button';
import './style.css';
import { send } from 'emailjs-com';

const Form = () => {
  const [toSend, setToSend] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [buttonText, setButtonText] = useState('Odeslat zprávu');

  const onSubmit = (event) => {
    event.preventDefault();
    send(
      'service_hsk7pha',
      'template_ldgn5gg',
      toSend,
      'user_zx7oCt6Ko1aiefnFkIXsO',
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container-contact">
        <h3 className="subtitle--small heading--small heading--pink">
          Napište nám
        </h3>
        <form onSubmit={onSubmit} className="contact__form">
          <label className="contact__form--label">
            Vaše jméno
            <input
              type="text"
              name="user_name"
              className="contact__form--input"
              placeholder="Napište jméno a příjmení..."
              value={toSend.user_name}
              onChange={handleChange}
            />
          </label>

          <label className="contact__form--label">
            Váš email
            <input
              type="email"
              name="user_email"
              className="contact__form--input"
              required
              placeholder="Napište Vaši emailovou adresu..."
              value={toSend.user_email}
              onChange={handleChange}
            />
          </label>

          <label className="contact__form--label">
            Vaše zpráva
            <textarea
              name="message"
              rows="5"
              cols="30"
              className="contact__form--input"
              required
              placeholder="Napište Vaši zprávu..."
              value={toSend.message}
              onChange={handleChange}
            />
          </label>
          {/*    <Button
            type="submit"
            text="Odeslat zprávu"
            onClick={() => setText('Zpráva odeslána')}
          />  */}

          <div id="foot">
            <button
              /* {user_name = ''|| user_email = '' || message = '' ? disabled : null} */
              disabled={
                !toSend.user_name || !toSend.user_email || !toSend.message
              }
              className="button-main button-os"
              onClick={() => setButtonText('Zpráva odeslána')}
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

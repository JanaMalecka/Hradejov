import React, { useState } from 'react';

import './style.css';
import { send } from 'emailjs-com';
import validator from 'validator';

const Form = () => {
  const [toSend, setToSend] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [buttonText, setButtonText] = useState('Odeslat zprávu');

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

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
        setToSend({ user_name: '', user_email: '', message: '' });
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <>
      <div className="container-contact"></div>
    </>
  );
};

export default Form;

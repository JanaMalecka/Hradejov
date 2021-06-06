import React, { useState } from 'react';
import './style.css';

const Button = (props) => {
  return (
    <div id="foot">
      <button className="button-main button-os">
        {props.link ? <a href={props.link}>{props.text}</a> : props.text}
      </button>
    </div>
  );
};
export default Button;

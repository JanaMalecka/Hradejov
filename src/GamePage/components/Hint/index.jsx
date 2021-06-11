import React, { useState } from 'react';
import './style.css';
import relief from '../../img/relief0.jpg';




const Hint = () => {
  const [isOpen, setIsOpen] = useState(false);
 const handleClick= ()=> {
  isOpen ? setIsOpen(false) : setIsOpen(true)
 }

  return isOpen? <img onClick={handleClick} className="relief" src={relief}></img>:
  <button onClick={handleClick} id="btnHint" className="btnHint"> Hint / NÁPOVĚDA</button>
}
    
    

    
{/*  
    
 { <img src={"relief"+(isOn ? "0" : "1") +".jpg"}
  */} 


export default Hint;
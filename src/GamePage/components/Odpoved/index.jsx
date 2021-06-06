import React, { useState } from 'react';
import './style.css';

const Odpoved =() => {
const [isAnswerOk, setisAnswerOk]=useState(false)
const [isEmpty, setisEmpty]=useState (true)

console.log(isAnswerOk && !isEmpty)
return (
    <>
<div className=".kolecko">

    <input onChange={(event)=>{
        const cislo = parseInt( event.target.value);
        if (isEmpty){setisEmpty(false)};
        if (cislo===3) 
        {
            setisAnswerOk(true);
        }
        else{
        setisAnswerOk(false);}
    } 
}  disabled={isAnswerOk} /> 
</div>
<div>
{!isEmpty && ( isAnswerOk ? <p>ano </p>:<p>nenene zkus znovu</p>)}
</div>
</>
)
}

export default Odpoved;
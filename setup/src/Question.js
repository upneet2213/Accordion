import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id,title,info}) => {
  const [show,setShow]= useState(false)
  return <article className="question" >
    <header>
      <h4>{title}</h4>
      <button className="btn" onClick={()=>{setShow(!show)}}>{show?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
    </header>
    <p>{show?info:''}</p>
    
  </article>;
};

export default Question;

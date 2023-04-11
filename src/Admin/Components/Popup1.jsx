import React from 'react'
import "../../CSS/Popup1.css"
import {AiOutlineClose} from "react-icons/ai"

function Popup1(props) {
  return (props.trigger) ? (
    <div className='popup1'>
        <div className='popup1-inner'>
        <div className='close-btn' onClick={() => props.setTrigger(false) }><AiOutlineClose className='close-icon'/></div>
             {props.children}
        </div>
        </div>
  ) : "";
}

export default Popup1;
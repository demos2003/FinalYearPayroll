import React from 'react'
import "../../CSS/Popup1.css"
import {AiOutlineClose} from "react-icons/ai"

function Popup2(props) {
  return (props.trigger) ? (
    <div className='popup2'>
        <div className='popup2-inner'>
             <div className='close-btn' onClick={() => props.setTrigger(false) }><AiOutlineClose className='close-icon'/></div>
             {props.children}
        </div>
        </div>
  ) : "";
}

export default Popup2;
import React from 'react'
import "./CSS/Popup1.css"

function Popup1(props) {
  return (props.trigger) ? (
    <div className='popup1'>
        <div className='popup1-inner'>
             <button className='close-btn' onClick={() => props.setTrigger(false) }>close</button>
             {props.children}
        </div>
        </div>
  ) : "";
}

export default Popup1;
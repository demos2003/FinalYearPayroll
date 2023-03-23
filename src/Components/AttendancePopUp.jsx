import React from 'react'
import "./CSS/Popup1.css"

export const AttendancePopUp = (props) => {
    return (props.trigger) ? (
        <div className='popup2'>
            <div className='popup2-inner'>
                 <button className='close-btn' onClick={() => props.setTrigger(false) }>close</button>
                 {props.children}
            </div>
            </div>
      ) : "";
}

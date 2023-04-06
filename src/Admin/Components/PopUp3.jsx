import React from 'react'

export const PopUp3 = (props) => {
  return (props.trigger) ? (
    <div className='popup2'>
        <div className='popup2-inner'>
             <button className='close-btn' onClick={() => props.setTrigger(false) }>close</button>
             {props.children}
        </div>
        </div>
  ) : "";
}

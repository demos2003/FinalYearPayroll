import React from 'react'
import { useState } from 'react'
import "./overtime.css"

const Overtime = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
       
        <button onClick={() => setShow(true)} className="overtime_btn">+ Overtime</button><br></br>
        {show && 
        <div>
            <input className='input_width'/>
            <button onClick={() => setShow(false)}>save</button><br></br>
        </div>
        }
       
    </div>
  )
}

export default Overtime
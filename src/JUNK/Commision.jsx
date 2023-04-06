import React from 'react'
import { useState } from 'react'
import "./overtime.css"

const Commision = () => {
    const [show2, setShow2] = useState(false)
  return (
    <div>
       
        <button onClick={() => setShow2(true)} className="overtime_btn">+ Commision</button><br></br>
        {show2 && 
        <div>
            <input className='input_width'/>
            <button onClick={() => setShow2(false)}>save</button><br></br>
        </div>
        }
       
    </div>
  )
}

export default Commision
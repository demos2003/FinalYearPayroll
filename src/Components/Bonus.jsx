import React from 'react'
import { useState } from 'react'
import "./overtime.css"

const Bonus = () => {
    const [show1, setShow1] = useState(false)
  return (
    <div>
       
        <button onClick={() => setShow1(true)} className="overtime_btn">+ Bonus</button><br></br>
        {show1 && 
        <div>
            <input className='input_width'/>
            <button onClick={() => setShow1(false)}>save</button><br></br>
        </div>
        }
       
    </div>
  )
}

export default Bonus
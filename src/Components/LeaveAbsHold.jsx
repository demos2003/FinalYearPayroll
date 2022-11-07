import React from 'react'
import LeaveAbs from '../Components/LeaveAbs'
import '../Views/Attendance.css'
import '../Views/App.css'


export const LeaveAbsHold = () => {
  return (
    <div>
        <div className='leave-card'>
      <p className='card-font'>Leave Absence List</p><hr></hr>
       <LeaveAbs/>
       <LeaveAbs/>
       <LeaveAbs/>
       <LeaveAbs/>
    
     </div>
    </div>
  )
}

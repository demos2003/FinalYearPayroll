import React from 'react'
import '../Views/CSS/Attendance.css'
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';

const LeaveAbs = () => {
  return (
    <div className='leave-comp' style={{display:"flex", justifyContent:"space-evenly"}}>
      <Avatar className='avatar' sx={{ bgcolor: deepPurple[400] }}>DN</Avatar>
      <h4>Monday 12 january 2023</h4>
      <h4>08:30 AM </h4>
      <p className='view_page'>2000</p>
    </div>
  )
}
export default LeaveAbs

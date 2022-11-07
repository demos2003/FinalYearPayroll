import React from 'react'
import '../Views/Attendance.css'
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';

const LeaveAbs = () => {
  return (
    <div className='leave-comp'>
      <Avatar className='avatar' sx={{ bgcolor: deepPurple[400] }}>DN</Avatar>
      <h3>Demilade Nasiru</h3>
      <p className='view_page'>View Page</p>
    </div>
  )
}

export default LeaveAbs

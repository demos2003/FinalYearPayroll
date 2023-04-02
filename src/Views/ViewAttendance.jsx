import React from 'react'
import DateTimePicker from '../Components/DateTimePicker'


const ViewAttendance = () => {
  return (
    <div>
         <div className="attendTable" style={{ marginTop: 100 }}>
        <h1 className="active_pagehead">ATTENDANCE</h1>
        <div className="table-holder attendance_table-holder">
          <table className="table table-bordered table-width attendance_table">
            <thead>
              <tr>
                <th scope="col">Employee ID</th>
                <th scope="col">Name</th>
                <th scope="col">Time in</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ABC1234657</td>
                <td>Ugo Justice</td>
                <td>01:30 AM</td>
              </tr>
              <tr>
                <td>ABDA124865</td>
                <td>Nasiru Iyidemilade</td>
                <td>02:40 PM</td>
              </tr>
              <tr>
                <td>ADCTDB$@#</td>
                <td>Micheal Jackson</td>
                <td>03:45 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 style={{marginLeft:70}}>Attendance Time Picker</h4>
        <div >
          
            {/* <button style={{marginLeft:10, backgroundColor:"#5D3FD3", border:"none", width:70}}>Save</button> */}
            <DateTimePicker/>

        </div>
      </div>

    </div>
  )
}

export default ViewAttendance
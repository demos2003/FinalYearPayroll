import "./CSS/App.css";
import React from "react";
import { VictoryPie } from "victory";
import "bootstrap/dist/css/bootstrap.css";
import LongBtn from "./Long-btn";
import LeaveAbs from "../Components/LeaveAbs";
import { LeaveAbsHold } from "../Components/LeaveAbsHold";

import "./CSS/Attendance.css";

function Attendance() {
  return (
    <div className="">
      <h1 className="active_pagehead">ATTENDANCE</h1>
      <div className="table-holder attendance_table-holder">
        <table class="table table-bordered table-width attendance_table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Employee ID</th>
              <th scope="col">Name</th>
              <th scope="col">Time in</th>
              <th scope="col">Time Out</th>
              <th scope="col">Interval</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">May, 27 2022</th>
              <td>ABC1234657</td>
              <td>Ugo Justice</td>
              <td>01:30 AM</td>
              <td>09:15 Pm</td>
              <td>07hr:05mins</td>
            </tr>
            <tr>
              <th scope="row">May, 27 2022</th>
              <td>ABDA124865</td>
              <td>Nasiru Iyidemilade</td>
              <td>02:40 PM</td>
              <td>07:30 PM</td>
              <td>07hr:05mins</td>
            </tr>
            <tr>
              <th scope="row">May, 27 2022</th>
              <td>ADCTDB$@#</td>
              <td>Micheal Jackson</td>
              <td>03:45 PM</td>
              <td>06:20 AM</td>
              <td>07hr:05mins</td>
            </tr>
          </tbody>
        </table>
        <LongBtn />
      </div>
      <div className="attenance_graph-holder">
        <div className="card-1">
          <p className="card-font">Attendance Charts</p>
          <hr></hr>
          <div>
            <VictoryPie
              animate={{
                duration: 2000,
              }}
              colorScale={["Green", "Red", "Orange"]}
              data={[
                { x: "Present", y: 80 },
                { x: "Absent", y: 5 },
                { x: "Late", y: 15 },
              ]}
            />
          </div>
        </div>
        {/* <div className='leave-card'>
      <p className='card-font'>Leave Absence List</p><hr></hr>
       <LeaveAbs/>
       <LeaveAbs/>
       <LeaveAbs/>
       <LeaveAbs/>
    
     </div> */}

        <LeaveAbsHold />
      </div>
    </div>
  );
}

export default Attendance;

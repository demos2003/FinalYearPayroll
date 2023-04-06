// import "./CSS/App.css";
// import "./CSS/Dashboard.css";
import React from "react";
import { AiOutlineUser, AiOutlineCalendar } from "react-icons/ai";
import { BiRun } from "react-icons/bi";
import { MdOutlineSick } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";
import Popup1 from "../Components/Popup1";
import "bootstrap/dist/css/bootstrap.css";
import Calender from "../Components/Calender";
// import Example from "../Components/BarChart";

function DashboardCont() {
  return (
    <div className="top_card">
      <div className="cardhold">
        <div className="slip slip1">
          <div className="slip_hold">
            <div className="content">
              <div style={{ fontSize: "10px" }}>EMPLOYEES:</div>{" "}
              <div style={{ fontSize: "35px" }}>50</div>
            </div>
            <div className="IconB">
              <AiOutlineUser />
            </div>
          </div>
        </div>
        <div className="slip slip2">
          <div className="slip_hold">
            <div className="content">
              <div style={{ fontSize: "10px" }}>SPRINT:</div>{" "}
              <div style={{ fontSize: "35px" }}>12</div>
            </div>
            <div className="IconB">
              <BiRun />
            </div>
          </div>
        </div>
        <div className="slip slip3">
          <div className="slip_hold">
            <div className="content">
              <div style={{ fontSize: "10px" }}>SICK LEAVE:</div>{" "}
              <div style={{ fontSize: "35px" }}>0</div>
            </div>
            <div className="IconB">
              <MdOutlineSick />
            </div>
          </div>
        </div>
        <div className="slip slip4">
          {" "}
          <div className="slip_hold">
            <div className="content">
              <div style={{ fontSize: "10px" }}>APPOINTMENTS:</div>{" "}
              <div style={{ fontSize: "35px" }}>2</div>
            </div>
            <div className="IconB">
              <AiOutlineCalendar />
            </div>
          </div>
        </div>
      </div>

      <div className="tableWidth2">
        <div className="tableN">
          <h4>Employees</h4>
          <hr></hr>
          {/* <Example/> */}
        </div>
        <div className="calendar-pos">
          <Calender />
        </div>
      </div>
    </div>
  );
}

export default DashboardCont;

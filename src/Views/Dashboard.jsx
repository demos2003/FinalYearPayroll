
import './App.css';
import './Dashboard.css'
// import React from 'react';
import { Avatar } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useContext } from "react";
// import "./admin.css";
import {BiMoney} from "react-icons/bi";
import {BsPersonSquare} from "react-icons/bs"
import {AiOutlineHome} from "react-icons/ai"
import { useState, useEffect } from "react";
import { BsPeople } from "react-icons/bs";
import { AiOutlineTable, AiOutlineContacts } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import Employees from './Attendance';
import DashboardCont from './DashbardCont';
import Payroll from './Payroll';
import Deductions from './Deductions';
import Position from './Positions';

export const Dashboard = () => {
  // api consumption begin
  const [active, setActive] = useState("FirstTable");
 return (
    <div className="admin-holder">
      {/* bootsrap link */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* sidebar container */}
      <div className="sidebar">
        <div>
          <div className="sidebar1">
            <div className="user1">
                <div className="head1">
              <h5 style={{color:"white"}}>ADMIN PANEL</h5>
              </div>
              <Avatar src="/broken-image.jpg" />
              <div className="dropdown">
                {/* logout and change password drop down */}
                <div className="logout-dropdown">
                  <p className='user-name'>
                    DEMILADE
                    <MdArrowDropDown className="aIcon-pos" />
                  </p>
                </div>
                <div className="dropdown-content">
                  {/* <a  onClick={handleLogout}>
                    {user && "Logout"}
                  </a> */}
                  {/* <PasswordChange id={user._id} /> */}
                </div>
              </div>
            </div>
            <hr></hr>
            {/* side navbar begins */}
            <div className="options">
              <p className="option">
                <AiOutlineHome className="o-icon" />
                <a  onClick={() => setActive("FirstTable")}>
                  DASHBOARD
                </a>
              </p>
              <p className="option">
                <AiOutlineTable className="o-icon" />
                <a  onClick={() => setActive("SecondTable")}>
                  ATTENDANCE
                </a>
              </p>
              <p className="option">
                <BiMoney className="o-icon" />
                <a onClick={() => setActive("ThirdTable")}>
                    PAYROLL
                    </a>
              </p>
              <p className="option">
                <AiOutlineContacts className="o-icon" />
                <a onClick={() => setActive("FourthTable")}>
                    DEDUCTIONS
                    </a>
              </p>
              <p className="option">
                <BsPersonSquare className="o-icon" />
                <a onClick={() => setActive("FifthTable")}>
                    POSITIONS
                    </a>
              </p>
              {/* <p className="option">
                <AiOutlineContacts className="o-icon" />
                <a onClick={() => setActive("ThirdTable")}>
                    DEDUCTIONS
                    </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
      {active === "FirstTable" && <DashboardCont />}
      {active === "SecondTable" && <Employees/>}
      {active === "ThirdTable" && <Payroll />}
      {active === "FourthTable" && <Deductions/>}
      {active === "FifthTable" && <Position/>}
    </div>
    // side navbar end
  );
};


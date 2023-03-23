
import './CSS/App.css';
import './CSS/Dashboard.css'
import { Avatar } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useContext } from "react";
import {AiOutlineHome} from "react-icons/ai"
import {FiSettings} from "react-icons/fi"
import { useState, useEffect } from "react";
import { AiOutlineTable, AiOutlineContacts } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { StaffAttendance } from '../Components/StaffAttendance';
import { Payslip } from '../Components/Payslip';
import { BiLogOut } from "react-icons/bi"

export const UserHomepage = () => {

   
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
              <h5 style={{color:"white"}}>USER PANEL</h5>
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
                  ATTENDANCE 
                </a>
              </p>
              <p className="option">
                <AiOutlineTable className="o-icon" />
                <a  onClick={() => setActive("SecondTable")}>
                  PAYSLIP
                </a>
              </p>
              <p className="option">
                <FiSettings className="o-icon" />
                <a  onClick={() => setActive("ThirdTable")}>
                  SETTINGS
                </a>
              </p>
              <p className="option">
                <BiLogOut className="o-icon" />
                <a  onClick={() => setActive("FourthTable")}>
                  LOGOUT
                </a>
              </p>
              
            </div>
          </div>
        </div>
      </div>
      {active === "FirstTable" && <StaffAttendance />}
      {active === "SecondTable" && <Payslip/>}
     
    </div>
    // side navbar end
  );
};

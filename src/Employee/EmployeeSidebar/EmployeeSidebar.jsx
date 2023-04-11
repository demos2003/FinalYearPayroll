import React from "react";
import { NavLink } from "react-router-dom";
import { BsPersonSquare } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Avatar } from "@mui/material";
import StaffLogOut from "../Components/StaffLogOut";
import {IoSettingsOutline} from "react-icons/io5"
import {MdOutlinePayments} from "react-icons/md"
import SideBarProfilePic from "../Components/SideBarProfilePic";

const EmployeeSidebar = ({ employee }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div>
      <div className="sidebar">
        <div>
          <div className="sidebar1">
            <div className="user1">
              <div className="head1">
                <h5 style={{ color: "white" }}>USER PANEL</h5>
              </div>
              {/* <Avatar src="/broken-image.jpg" /> */}
              <SideBarProfilePic employee={employee}/>

              <div className="dropdown">
                <div className="logout-dropdown">
                  <p className="user-name">{employee.name}</p>
                </div>
              </div>
            </div>
            <hr></hr>
            {/* side navbar begins */}
            <div className="options">
              <NavLink to="/staffattendance" style={{ textDecoration: "none" }}>
                <div className="sidebar-button2">
                  <AiOutlineHome className="o-icon" />
                  ATTENDANCE
                </div>
              </NavLink>
              <NavLink to="/payslip" style={{ textDecoration: "none" }}>
                <div className="sidebar-button2">
                  <MdOutlinePayments className="o-icon" />
                  PAYSLIP
                </div>
              </NavLink>
              <NavLink to="/settings" style={{ textDecoration: "none" }}>
                <div className="sidebar-button2">
                  <IoSettingsOutline className="o-icon"/>
                  SETTINGS
                </div>
              </NavLink>
              <p className="sidebar-button2" style={{ cursor: "pointer" }}>
                <BiLogOut className="o-icon" />
                <a onClick={handleOpen}>LOGOUT</a>
              </p>
              <StaffLogOut open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSidebar;

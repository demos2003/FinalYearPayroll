import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";
import LogOutModal from "../../Employee/Components/LogOutModal";
import { BsPersonSquare } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import "../../CSS/Dashboard.css"

const AdminSideBar = ({ admin }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className="sidebar">
      <div>
        <div className="sidebar1">
          <div className="user1">
            <div className="head1">
              <h5 style={{ color: "white" }}>ADMIN PANEL</h5>
            </div>
            <Avatar src="/broken-image.jpg" />
            <div className="dropdown">
              {/* logout and change password drop down */}
              <div className="logout-dropdown">
                <div className="user-name">
                  <p style={{ textAlign: "center", marginRight: 25 }}>
                    {admin.admin.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          {/* side navbar begins */}
          <div className="options">
            <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
              <div className="sidebar-button2">
                <AiOutlineHome className="o-icon" />
                DASHBOARD
              </div>
            </NavLink>
            <NavLink to="/attendance" style={{ textDecoration: 'none' }}>
              <div className="sidebar-button2">
                <AiOutlineHome className="o-icon" />
                ATTENDANCE
              </div>
            </NavLink>
            <NavLink to="/employees" style={{ textDecoration: 'none' }}>
              <div className="sidebar-button2">
                <BsPersonSquare className="o-icon" />
                EMPLOYEES
              </div>
            </NavLink>
            <NavLink to="/postions" style={{ textDecoration: 'none' }}>
              <div className="sidebar-button2">
                <AiOutlineHome className="o-icon" />
                POSITIONS
              </div>
            </NavLink>
            <NavLink to="/payroll" style={{ textDecoration: 'none' }}>
              <div  className="sidebar-button2">
                <BsPersonSquare className="o-icon" />
                PAYROLL
                </div>
            </NavLink>
            <p className="sidebar-button2" style={{ cursor: "pointer" }}>
              <BiLogOut className="o-icon" />
              <a onClick={handleOpen}>LOGOUT</a>
            </p>
            <LogOutModal open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;

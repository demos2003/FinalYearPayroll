import "./CSS/App.css";
import "./CSS/Dashboard.css";
import { Avatar } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import React, { useContext } from "react";
import { BiMoney } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { useState, useEffect } from "react";
import { BsPeople } from "react-icons/bs";
import { AiOutlineTable, AiOutlineContacts } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import DashboardCont from "./DashbardCont";
import Deductions from "./Deductions";
import Position from "./Positions";
import Employees from "./Employees";
import { BiLogOut } from "react-icons/bi";
import config from "../config";
import axios from "axios";
import { adminContext } from "../Context/Context";
import LogOutModal from "../Components/LogOutModal";

export const Dashboard = ({ admin }) => {
  // api consumption begin
  const [active, setActive] = useState("FirstTable");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const [adminName, getAdminName] = useState([]);
  useEffect(() => {
    const fetchAdmin = async () => {
      const res = await axios.get(`${config.baseURL}/admin`)
      getAdminName(res.data);
      //  console.log(res.data)
    };
    fetchAdmin();
  }, []);

  // console.log(admin);
  // console.log(admin.admin.name);






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
                <h5 style={{ color: "white" }}>ADMIN PANEL</h5>
              </div>
              <Avatar src="/broken-image.jpg" />
              <div className="dropdown">
                {/* logout and change password drop down */}
                <div className="logout-dropdown">
                  <div className="user-name" >
                    <p style={{ textAlign: "center", marginRight: 25 }}>{admin.admin.name}</p>
                  </div>
                </div>

              </div>
            </div>
            <hr></hr>
            {/* side navbar begins */}
            <div className="options">
              <p className="option">
                <AiOutlineHome className="o-icon" />
                <a onClick={() => setActive("FirstTable")}>DASHBOARD</a>
              </p>
              <p className="option">
                <AiOutlineTable className="o-icon" />
                <a onClick={() => setActive("SecondTable")}>ATTENDANCE</a>
              </p>
              <p className="option">
                <BsPersonSquare className="o-icon" />
                <a onClick={() => setActive("FifthTable")}>POSITIONS</a>
              </p>
              <p className="option">
                <BiLogOut className="o-icon" />
                <a onClick={handleOpen}>LOGOUT</a>
              </p>
              <LogOutModal open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </div>
      {active === "FirstTable" && <DashboardCont />}
      {active === "SecondTable" && <Employees />}
      {active === "FourthTable" && <Deductions />}
      {active === "FifthTable" && <Position />}
    </div>
    // side navbar end
  );
};

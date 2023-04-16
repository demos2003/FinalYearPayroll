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
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Col } from "react-bootstrap";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineIdcard } from "react-icons/ai";
import { ImCheckmark } from "react-icons/im";
import { FaDollarSign } from "react-icons/fa";
import DonutChart from "react-donut-chart";
import axios from "axios";
import { useEffect } from "react";
import config from "../../config";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BsFillPersonXFill } from "react-icons/bs";

function DashboardCont({ data }) {
  const [dailyAttendance, getDailyAttendance] = useState([]);
  useEffect(() => {
    const fetchDailyAttendance = async () => {
      const res = await axios.get(
        `${config.baseURL}/attendance/daily/attendance`
      );
      getDailyAttendance(res.data);
    };
    fetchDailyAttendance();
  }, []);

  console.log(dailyAttendance.length);

  const [employee, getEmployee] = useState([]);
  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await axios.get(`${config.baseURL}/employee`);
      getEmployee(res.data);
    };
    fetchEmployee();
  }, []);

  const [employeePay, getEmployeePay] = useState([]);
  useEffect(() => {
    const fetchPayData = async () => {
      const res = await axios.post(`${config.baseURL}/monthlypay/all`);
      getEmployeePay(res.data);
    };
    fetchPayData();
  });

  const attendanceRatio = (dailyAttendance.length / employee.length) * 100;
  console.log(attendanceRatio);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div className="top_card">
      <div className="cardhold">
        <div className="dashboard_card">
          <div className="icon_layer">
            <div className="card_icon">
              <FaDollarSign
                style={{
                  fontSize: 25,
                  color: "#1c0676",
                  position: "relative",
                  top: 5,
                  left: -3,
                }}
              />
            </div>
            <p
              style={{
                fontWeight: "500",
                color: "green",
              }}
            >
              +23%
            </p>
          </div>
          <div className="info_layer">
            <p className="cardText" style={{ position: "relative", top: 5 }}>
              Total Pay
            </p>
            <p className="cardText2">
              <span style={{ color: "rgb(170, 170, 170)" }}>₦ </span>
              {employeePay.totalMonthlyPay}
            </p>
          </div>
        </div>
        <div className="dashboard_card">
          <div className="icon_layer">
            <div className="card_icon">
              <IoIosPeople
                style={{
                  fontSize: 25,
                  color: "#1c0676",
                  position: "relative",
                  top: 5,
                  left: -3,
                }}
              />
            </div>
            <p
              style={{
                fontWeight: "500",
                color: "green",
              }}
            >
              +23%
            </p>
          </div>
          <div className="info_layer">
            <p className="cardText" style={{ position: "relative", top: 5 }}>
              No of Staff
            </p>
            <p className="cardText2">
              <span style={{ color: "rgb(170, 170, 170)" }}> </span>
              {employee.length}
            </p>
          </div>
        </div>
        <div className="dashboard_card">
          <div className="icon_layer">
            <div className="card_icon">
              <ImCheckmark
                style={{
                  fontSize: 25,
                  color: "#1c0676",
                  position: "relative",
                  top: 5,
                  left: -3,
                }}
              />
            </div>
            <p
              style={{
                fontWeight: "500",
                color: "green",
              }}
            >
              +23%
            </p>
          </div>
          <div className="info_layer">
            <p className="cardText" style={{ position: "relative", top: 5 }}>
              Attendance Ratio
            </p>
            <p className="cardText2">
              <span style={{ color: "rgb(170, 170, 170)" }}> </span>
              {attendanceRatio.toFixed(2)}%
            </p>
          </div>
        </div>
      </div>

      <div className="layer2">
        <div className="layer2-left">
          <TableContainer
            component={Paper}
            style={{
              width: "97%",
              marginLeft: 10,
              marginBottom: 40,
              marginTop: 20,
            }}
          >
            <Table
              sx={{ minWidth: 550 }}
              aria-label="customized table"
              id="DashTable"
            >
              <TableHead>
                <TableRow>
                  <TableCell className="columnWidth">Employee ID</TableCell>
                  <TableCell className="columnWidth">Name</TableCell>
                  <TableCell className="columnWidth">Time in &nbsp;</TableCell>
                </TableRow>
              </TableHead>
              {dailyAttendance.length === 0 ? (
                <div className="mainTable"
            
                >
                  <BsFillPersonXFill
                    style={{ fontSize: 100, color: "#1c0676" }}
                  />
                </div>
              ) : (
                <TableBody>
                  {dailyAttendance.map((item) => (
                    <StyledTableRow key={item._id}>
                      <StyledTableCell className="columnWidth">
                        {item.employee._id}
                      </StyledTableCell>
                      <StyledTableCell className="columnWidth">
                        {item.employee.name}
                      </StyledTableCell>
                      <StyledTableCell className="columnWidth">
                        {new Date(item.createdAt).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </div>
        <div className="layer2-right">
          <div className="layer2-right-top">
            <div className="screen1920">
              <Calender />
            </div>
          </div>
          <div className="layer2-right-bottom">
            <DonutChart
              width={290}
              height={200}
              className="donut"
              data={[
                {
                  label: "Developer",
                  value: 25,
                },
                {
                  label: "Managers",
                  value: 35,
                },
                {
                  label: "Testers",
                  value: 10,
                },
                {
                  label: "Accountants",
                  value: 30,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCont;

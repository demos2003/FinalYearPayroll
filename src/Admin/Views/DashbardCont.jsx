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
              {attendanceRatio}%
            </p>
          </div>
        </div>
      </div>

      <div className="layer2">
        <div className="layer2-left">
          <TableContainer
            component={Paper}
            style={{
              width: 600,
              marginLeft: 10,
              marginBottom: 40,
              marginTop: 20,
            }}
          >
            <Table sx={{ minWidth: 550 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell className="columnWidth">Employee ID</TableCell>
                  <TableCell className="columnWidth">Name</TableCell>
                  <TableCell className="columnWidth">Time in &nbsp;</TableCell>
                </TableRow>
              </TableHead>
              {dailyAttendance.length === 0 ? (
                <div
                  style={{
                    paddingTop: 100,
                    paddingBottom: 100,
                    position: "absolute",
                    left: 570,
                  }}
                >
                  {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKc0lEQVR4nO1dB5MURRi9f6aYUBRFMcuCHlkQJKh4JEEskhxBQEVRQDCQJKgIkkFUQFQuc8cdezmxl+OGz3qjWzX9Tc/ehpntXmZeVVfB3exsX7+Z7v7eFzqPfGiFPNUd8CHCJ0Qz+IRoBp8QzeATohlyipCm2kE6e+wu7VxfT6veqKZ5z5fTjCdKaeL9RfTqg8X0+lNltHx6lfH738900tBglHIN2hPSGQrTsb2t9HbgFgXuK0qpTRtTQvt3NFNfb4RyBdoS0tsVoa+3N1H+w8UpE8Hb3OfK6VZRH+UCtCTkz8tdNPvpsoyJMDcQW3y9h3SHVoTEYkQHd7YYa4JsUCeNKqbV86rpyO4W+utKN9VU9FN78zANDUQpPByjjvYwFV3roV2FDTRzbKnl89MfL6Xvd7VQVWk/RaMx0hF5OpGxq7BBSsTscWXGOtLdEU76fiBp18YGW3IXvlxBl050UCSiFzHaEHLg82bLoE0cVUT7tjXRQF/6u6VDX7QknMpWzrpNobbkifYEIX9e7rY8ydPGlNDNq5nP+bEoUUF+ZUJSsF411Q2RDlBOSF9PhN54psxCRnV5v2PfMdAfpWDlAJ05epe2rqilVx+w7tzemnDL2NmR1wnBlMSnqZsOvBmJ0NIwROsW1lhI+XR1HXmakK5QmCaPLhEGZd/Wxqx8NxbzTz6oszwMTr6ZOUfI8X2twoDMGldG/b3ZkzuGh2K0aJKoAGxbUUueJYTLIUf2tGa9D0VXe4Q+TH6kJKsPhTaEYB7nRl9nKKzE/nl7gvhg/HGukzxHCFRb8yB8MKdaVVcMzczcl28/afIeIV9uEK3yw1+2KNXOzH1ZM7/Ge4TAn2EehBu/dqvqCjXcGbTYJJ4jZMFLFcIgqNxu9vVEhL7A0eU5QqY+JtofbU3qpAvYJOa+wPvoOUKwqzIPAtRZVYB4KWx9R5d4j5DXHhIJgT9DFUJtwxax0XOEYJ42D4JKYa++xl/ULcZYXfWAMkL+/q1b3PbO8+C2d8OiO8IgXD3fpY2mBhvJc4R8w6xjeAxVgau+J/a3eY+QqxdE6xiGoi42UWVJn/cIwSIO/0N8ELDrGlKw9W1tFEXOKaNLKBKOeVN+Xzq1ShiM65e6lIucKnUs5YRAVTUPxo7V9Vnvw0fLa0WfzG51IqdyQk4ebBcGY+bY0qzGScEX8vqTYkAddlyeJKS7M0LTx1ijCytuZm9BbawVDcK4x/Bu6zB5jhD4P7igd+54KKt9QDjpqcPtlkCL7z5t9h4hiyeLwWs/fqtu7494LXNfFudXKuuLNvK7Cn+6eQtu7gv65jlCMEXpovaGh5k/5AEP+kPmvcCs42J11jHSGniCj+cI2bQkKAwC8jZU4ZfD4hqydqEH1V5uIcMe6FHgE0H04luviG/r0a9avUcIEjGnPiou7AWvVRqGGZ5Yt3H5ZIfxXcgPMfcB+hr0LU9a6ggd5YZZ4P90BLeBlGrZd6uOgFdKCAyzjQWioyqAp/T+ImMqcQuDA1FBaY43iJ0q43q1yA8xcgELrbmAwSr3XLpIkeZkbFocNNIjVEM5IXHAjx0wDdCV0+4FPJ86JIqahe/eIV2gDSHQjwKmQdr7kXuJO9tX1mql8GpJyDXm0p37XLkhjzsN1D/hso1Ko1RbQhA9OPkRcaDK/+513ZePhFNk6uoCbQgBtr5X62rOCAaeu41RXEAnaEVI6Y1ey+7n/A/O+UhOHxHVAWx9G4ODpBO0IgRYu6DGorxe+ClzUnAPnp++ZVmQdIN2hNTXDFokFbRMwe+HcB/kOeoG7QgBEFbqNiGoOKcjtCQEcJsQXeETohl8QjSDT0iS9gsCsOG42rw0aJTjQDVUxAWg4d/42ZalQaPQGirWpWts+oQkAALmoLHNfVbuO0nU8BlUREW6XCrwCZEArmS4BHgeZDoN94AakGzKnk8IA7bDPN7XiYZ7/n62MzcJ6QqFXd32Qg3gQJC3XRFONMQhf7yqjs79EKLbZf1GQU7kkaDh3/gZfrf9/TrDBW13n92bGhIGlGtHSCxGxh/FK4hmincm/pdkimwpPn1Akuc5j/GGElIXT4RSKluOayHV8MRWs0PM7n5aERKJxIwniP8BiL3NFL+e6jDERF7hGt8pIwOugJ8PtGeUHoHPnviuzeJWQEMsgeze2hBSe3uAVswUQ3LQIJc7EWaKN09WB4tXJUKbM77c0dormM7mjLdW6t6zqVE/QpCfDpcqL7UR+L/kn5vlW7GA8+9cMqXSlTq+uCfuzb+Pp4MrIQRPK0qCbywISsNxAvcV0ZvPl7vqq8DWlu+m8Ga4WVQZiz+PksRD19sdUUMIFlPMqbxTvG1ZFnS91AbfUWGez0aJKMwIfE3Zs7kxu4RgIUVy/khHTyyadIv++cP9EwxggXOjDws4B9Yc5D1i/k8lQ/j6xf9Od8AbKKtQcZRFbGJc4m9mnptRiZijl00TfdiyhoUbf3wsqibkCFtbvuPhCaHwNibjQ8E1Zs8k7iGLnOSL/IHPmt0hBIOKUwfmv5h4WsITircm21UTYlGyaFOwM2TA/G6+biRSOBnxkx1kOMvS6LBmom95TtfARX5eIiIQ5IzAtFSOnnASeAC4BW5npCFWjA+wHSkyMvB/3MMuhJbHh2F7nOdUsfvP1tTbkoC4XcgVqP6p+iCVY3vF+RtySCLYDbSZlGSukQEHA5g/gwc1Y0LAqt2uKa50Ih9cF2xeKmZuQX8aCYkGPF0yZElL2F1mRAheR9nOCUYejq6726IuAd8OvNY7HqhkYDfw6ZIBwJHFE5byMgnJlFnXuGmyf6QKzGBnU6GiRLKQkZIuGTJVGzuyvHQXRpnzBgaOytJG2Si+aUdKqmTI0rHRt5QJgZmPyHQ+RZ3+3v28QCdwzxEChZJ3Rmbl6ooZ99KU1Vw/ZFk3dq7Lfo0rRxf1UnWLOreJUl7UuSAHKxQ2SC5h872y7cV8h5MyzTdAaaNcwzFmGMJdrMwwfC8DwxAqrDDfPVWmtGBMuuB7fwQk2EknUBYylU5wDxkgMPIof8j/SRMCNVJYO9bn1tqRSFy0yz/h16UjLtoVsjmTqbjIE2kQNJCr2L+Dye8TrPI7YD7wMl35HfeQvR38MM14IemkCRnJy6dz++JDMY8Q4Z3cHoEnkwPTDZ5wuBLsph4ZcC3KT+GzOFaWA5VPM3ZQIeNI9cAG0myYq3nJDIie5mvgVs2G5IPoGu7C/WpLGi5cu2Owc6UdZ8UB5EEOZa4HOSDoz5EgB9UDGsiwwUJHSSgzEGvLr0OojhvOM9yTp2SjcQeW8rgs1dgtiZTEeunkeSaYpvibYVc+xPOERCIxI9aWDxbmeUSHYEeULvBZ1ASTh5IGpd5TzxMCwDCU1e2KrysISEjl5AZcCzuDb23NZOREsLXqN0WmZMcbAhLgA4f+BGsfawKUCjSotvgZiIMcIsuzN++oEsUV+IQwILCNh/840SDE2kWgmOETIgG2ofB+OpHSBqMPbwVOE00GPiEJAJsEGh50plSJwGcgh3S0p7aF9gmhkQHRD1Y8jEv4LOBIgl2DNwgN/y7IrzR+h2twbbpp0f8CTaVRmXYgw+AAAAAASUVORK5CYII="></img> */}
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
            <div className="calendar-pos">
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

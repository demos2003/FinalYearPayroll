import React from "react";
import "../../CSS/payslip.css";
import { BsTelephone, BsPerson } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { color } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import config from "../../config";
import { AiOutlineClose } from "react-icons/ai";
import PdFView from "../../Admin/Components/pdfViewer";

export const Payslip = ({ employee }) => {
  const [positonId, getPositionId] = useState([]);
  useEffect(() => {
    const fetchpositonData = async () => {
      const res = await axios.get(`${config.baseURL}/position`);
      getPositionId(res.data);
    };
    fetchpositonData();
  }, []);

  const [pay, getPay] = useState([]);
  useEffect(() => {
    const fetchPay = async () => {
      const res = await axios.get(
        `${config.baseURL}/monthlypay/${employee._id}`
      );
      getPay(res.data);
    };
    fetchPay();
  }, []);

  const [attendance, getAttendance] = useState([]);
  useEffect(() => {
    const fetchAttendance = async () => {
      const res = await axios.get(
        `${config.baseURL}/attendance/employee/${employee._id}/attendance`
      );
      getAttendance(res.data);
    };
    fetchAttendance();
  }, []);

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await axios.get(`${config.baseURL}/employee/${employee._id}`);
      setUserInfo(res.data);
    };
    getUserDetails();
  }, [employee._id]);

  const posName = userInfo.position;

  const FormatDate = ({ employee }) => {
    const dateString2 = employee.createdAt;

    const date2 = new Date(dateString2);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate2 = date2.toLocaleDateString("en-US", options);

    return (
      <div>
        <p className="info-style" style={{ fontWeight: "bolder" }}>
          {formattedDate2}
        </p>
      </div>
    );
  };

  const AttendanceHistory = ({ item }) => {
    let lateStatus = item.late ? "Late" : "On Time";
    const dateString = item.date;
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    const statusStyle = {
      color: item.late ? "red" : "green",
    };

    // console.log(item)
    return (
      <div>
        <div
          className="attendanceHolderRow"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <p className="attendanceHistory">{formattedDate}</p>
          <p className="attendanceHistory" style={statusStyle}>
            {lateStatus}
          </p>
        </div>
        <hr />
      </div>
    );
  };

  const sortedAttendance = attendance.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const Slice = sortedAttendance.slice(0, 5);

  // console.log(Slice);

  const [paySlip, setPaySlip] = useState(false);

  return (
    <div className="payslipHolder">
      <div className="MonthIndicator">
        <h5>
          Payslip for the period of{" "}
          <span className="dateName"> April 2023</span>{" "}
        </h5>
      </div>
      <div className="StaffIndicator">
        <div className="ImgHolder">
          <img src="/images/userProfile.png" width="80" />
        </div>
        <div className="NameHolder">
          <div className="employeeName">
            <h5>{employee.name},</h5>
          </div>
          <div className="employeePosition">
            <h6 className="dateName">
              {posName ? posName.name : <>Position Loading</>}
            </h6>
          </div>
          <div className="employeeTags">
            <h5>{employee._id}</h5>
          </div>
        </div>
      </div>
      <div className="TagIndicator">
        <div className="infoTags">
          <h5>₦{pay.totalPay}</h5>
          <h6>Total Earnings</h6>
        </div>
        <div className="infoTags1">
          <h5>₦100,000.00</h5>
          <h6>Est. Total Earnings</h6>
        </div>
        <div className="infoTags">
          <h5>16</h5>
          <h6>No of days Present</h6>
        </div>
        <div className="infoTags2">
          <h5>34,000.00</h5>
          <h6>Total Earnings</h6>
        </div>
        {/* <div className="infoTags">
          <h5>34,000.00</h5>
          <h6>Total Earnings</h6>
        </div>
        <div className="infoTags3">
          <h5>34,000.00</h5>
          <h6>Total Earnings</h6>
        </div>
        <div className="infoTags">
          <h5>34,000.00</h5>
          <h6>Total Earnings</h6>
        </div> */}
      </div>
      <div>
        <div className="paySlipPage">
          <div className="PaySlipInfo">
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <h5>Attendance History</h5>

                <button
                  className="signin-btn"
                  style={{ width: 100 }}
                  onClick={() => setPaySlip(true)}
                  type="submit"
                >
                  View PDF
                </button>
              </div>
              {paySlip && (
                <div className="popup2">
                  <div className="popup2-inner">
                    <div
                      className="close-btn"
                      onClick={() => setPaySlip(false)}
                    >
                      <AiOutlineClose className="close-icon" />
                    </div>
                    <div style={{ justifyContent: "center" }}>
                      <PdFView employee={employee} pay={pay.totalPay}/>
                    </div>
                  </div>
                </div>
              )}
              {/* <AttendancePopUp
          trigger={takeAttendance}
          setTrigger={setTakeAttendance}
        >
          <h1>Attendance Captured Successfully</h1>
        </AttendancePopUp> */}
            </div>
            <hr />
            {Slice.map((item) => (
              <AttendanceHistory item={item} />
            ))}
          </div>
          <div className="info-holder2">
            <h5>Personal Information</h5>
            <hr />
            <div className="mini-info">
              <div>
                {" "}
                <BsTelephone className="icon-pos2" /> Phone
              </div>
              <p className="info-style">{employee.phoneNo}</p>
            </div>
            <div className="mini-info">
              <div>
                {" "}
                <AiOutlineMail className="icon-pos2" /> Email{" "}
              </div>
              <p className="info-style">{employee.email}</p>
            </div>
            <div className="mini-info">
              <div>
                <AiOutlineCalendar className="icon-pos2" /> Start Date
              </div>

              <FormatDate employee={employee} />
            </div>
            <div className="mini-info">
              <div>
                <BsPerson className="icon-pos2" />
                Position
              </div>
              <p className="info-style">
                {posName ? posName.name : <>Loading</>}
              </p>
            </div>
            <div className="mini-info">
              <div>
                <BiHomeAlt className="icon-pos2" />
                Address{" "}
              </div>
              <p className="info-style"> Magodo brooks estate, Lagos Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

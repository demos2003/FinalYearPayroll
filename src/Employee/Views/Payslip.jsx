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

export const Payslip = ({ employee }) => {
  const [positonId, getPositionId] = useState([]);
  useEffect(() => {
    const fetchpositonData = async () => {
      const res = await axios.get(`${config.baseURL}/position`);
      getPositionId(res.data);
    };
    fetchpositonData();
  }, []);

  const  [pay, getPay] = useState([]);
  useEffect(() => {
    const fetchPay = async () => {
      const res = await axios.get(`${config.baseURL}/monthlypay/${employee._id}`);
      getPay(res.data);
    };
    fetchPay();
  }, []);

  const [attendance, getAttendance] = useState([]);
  useEffect(() => {
     const fetchAttendance = async () => {
      const res = await axios.get(`${config.baseURL}/attendance/employee/${employee._id}/attendance`);
      getAttendance(res.data);
     };
     fetchAttendance();
  }, []);

  // console.log(employee._id);
  // console.log(attendance)


  const AttendanceHistory = ({item}) => {
    let lateStatus = item.late ? "Late" : "On Time";
    const dateString = item.date;
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    // console.log(item.late)

    const statusStyle = {
      color: item.late ? "red" : "green"
    };
    return (
      <div>
       <div className="attendanceHolderRow" style={{display:"flex", flexDirection:"row"}}>
        <p className="attendanceHistory">{formattedDate}</p>
        <p className="attendanceHistory" style={statusStyle}>{lateStatus}</p>
        
       </div>
       <hr/>
       </div>
    )
    
  }

  const sortedAttendance = attendance.sort((a, b) => new Date(b.date) - new Date(a.date));
 


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
            <h5>
              {employee.name}, {employee._id}
            </h5>
          </div>
          <div className="employeePosition">
            <h6 className="dateName">Developer</h6>
          </div>
          <div className="employeeTags">
            <h5>Developer</h5>
          </div>
        </div>
      </div>
      <div className="TagIndicator">
        <div className="infoTags">
          <h5>{pay.totalPay}</h5>
          <h6>Total Earnings</h6>
        </div>
        <div className="infoTags1">
          <h5>34,000.00</h5>
          <h6>Total Earnings</h6>
        </div>
        <div className="infoTags">
          <h5>34,000.00</h5>
          <h6>Total Earnings</h6>
        </div>
        <div className="infoTags2">
          <h5>34,000.00</h5>
          <h6>Total Earnings</h6>
        </div>
        <div className="infoTags">
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
        </div>
      </div>
      <div>
        <div className="paySlipPage">
          <div className="PaySlipInfo">
            <h4>Attendace History</h4>
            <hr />
            {
              sortedAttendance.map((item) => (
                <AttendanceHistory item={item}/>
              ))
            }
           
          </div>
          <div className="info-holder2">
            <h4>Personal Info</h4>
            <hr />
            <div className="mini-info">
              <div>
                {" "}
                <BsTelephone className="icon-pos2" /> Phone
              </div>
              <p className="info-style">08188102756</p>
            </div>
            <div className="mini-info">
              <div>
                {" "}
                <AiOutlineMail className="icon-pos2" /> Email{" "}
              </div>
              <p className="info-style">Ladenas202@gmail.com</p>
            </div>
            <div className="mini-info">
              <div>
                <AiOutlineCalendar className="icon-pos2" /> Start Date
              </div>
              <p className="info-style">June 27, 2022</p>
            </div>
            <div className="mini-info">
              <div>
                <BsPerson className="icon-pos2" />
                Position
              </div>
              <p className="info-style">Lead Developer</p>
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

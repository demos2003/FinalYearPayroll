import React from "react";
import "../../CSS/StaffAttendance.css";
import { useState, useEffect } from "react";
import { AttendancePopUp } from "../Components/AttendancePopUp";
import config from "../../config";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";
import { TiTick } from "react-icons/ti";

export const StaffAttendance = ({ employee }) => {
  return (
    <div style={{ marginTop: 100, marginLeft: 130 }}>
      <div>
        <h1>Take Attendance</h1>
        <DisabledForm employee={employee} />
      </div>
    </div>
  );
};

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

function GetDay() {
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = daysOfWeek[today.getDay()];
    const month = today.toLocaleString("default", { month: "long" });
    const dayOfMonth = today.getDate();
    const year = today.getFullYear();
    setDay(`${dayOfWeek}`);
    setDate(`${month} ${dayOfMonth}, ${year}`);
  }, []);

  return (
    <div>
      <p>
        {day} {date}
      </p>
    </div>
  );
}

function Location() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      {latitude && longitude && (
        <p>
          Latitude: {latitude}, Longitude: {longitude}
        </p>
      )}
    </div>
  );
}

const DisabledForm = ({ name, time, day, location, employee }) => {
  // const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // console.log(employee._id)
  const [takeAttendance, setTakeAttendance] = useState(false);
  const [empID, setEmpID] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${config.baseURL}/attendance/${employee._id}`,
        {
          employeeId: employee._id,
        }
      );
      setTakeAttendance(true);
      setModalMessage(
        <div>
          <div>
            <TiTick fontSize={50} />
            Attendance recorded successfully
          </div>
          <p style={{ fontSize: 12, textAlign: "left" }}>
            <span style={{ fontWeight: 700 }}>NOTE:</span>Recorded Attendance
            doesnt signify on Time attendace, check attendance history to view
            attendance Status
          </p>
        </div>
      );

      res.data && window.location.reload();
    } catch (err) {
      setTakeAttendance(true);
      setModalMessage(
        <div>
          <div style={{width:570}}>
            <hr/>
            <FcCancel fontSize={50} />
            Failed to record attendance
            <hr/>
            <p style={{fontSize:12, textAlign:"left"}}><span style={{fontWeight:700}}>NOTE:</span> Please Retry at Time allocated for attendance</p>
          </div>
        </div>
      );
    }
  };

  return (
    <form action="#" className="formb" onSubmit={handleSubmit}>
      <div className="form">
        <div className="form-item">
          <label htmlFor="year" className="label-width">
            Name
          </label>
          <br />
          <div className="valueHolder">{employee.name}</div>
        </div>
        <div className="form-item">
          <label htmlFor="year" className="label-width">
            Employee ID
          </label>
          <br />
          <input
            value={employee._id}
            // onChange={(e) => setEmpID(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="year" className="label-width">
            Time
          </label>
          <br />
          <div className="valueHolder">
            <Clock />
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="year" className="label-width">
            Day
          </label>
          <br />
          <div className="valueHolder">
            <GetDay />
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="year" className="label-width">
            Location Cordinates
          </label>
          <br />
          <div className="valueHolder">
            <Location />
          </div>
        </div>
      </div>
      <div>
        <button
          className="signin-btn"
          style={{ marginTop: 20 }}
          onClick={() => setTakeAttendance(true)}
          type="submit"
        >
          Take Attendance
        </button>
        {takeAttendance && (
          <div className="popup2">
            <div className="popup2-inner">
              <div
                className="close-btn"
                onClick={() => setTakeAttendance(false)}
              >
                <AiOutlineClose className="close-icon" />
              </div>
              <div style={{ justifyContent: "center" }}>
                <h2>Confirm Attendance</h2>
                
                <h5 style={{ textAlign: "center", marginRight: 65 }}>
                  {modalMessage}
                </h5>
               
                
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
    </form>
  );
};

export default DisabledForm;

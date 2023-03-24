import React from "react";
import "./CSS/StaffAttendance.css";
import { useState, useEffect } from "react";
import { AttendancePopUp } from "./AttendancePopUp";

export const StaffAttendance = ( {employee}) => {
  return (
    <div style={{ marginTop: 100, marginLeft: 130 }}>
      <div>
        <h1>Take Attendance</h1>
        <DisabledForm employee={employee}/>
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

const DisabledForm = ({ name, employeeId, time, day, location, employee}) => {
  const [takeAttendance, setTakeAttendance] = useState(false);
  return (
    <form action="#" className="formb">
      <div className="form">
      <div className="form-item">
          <label htmlFor="year" className="label-width">
            Name
          </label>
          <br />
          <div className="valueHolder">
            
            {employee.user.name}
           
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="year" className="label-width">
            Employee ID
          </label>
          <br />
          <div className="valueHolder">
            {employee.user._id}
           
          </div>
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
        >
          Take Attendance
        </button>
        <AttendancePopUp
          trigger={takeAttendance}
          setTrigger={setTakeAttendance}
        >
          <h1>Attendance Captured Successfully</h1>
        </AttendancePopUp>
      </div>
    </form>
  );
};

export default DisabledForm;
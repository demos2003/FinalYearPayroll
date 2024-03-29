import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar-container">
      <Calendar
      // calendarType="tile"
      onChange={onChange} value={value} />
    </div>
  );
}

export default Calender;

import React, { useState } from "react";
import config from "../../config";

function DateTimePicker({ lateness }) {
  const [startDate, setStartDate] = useState(new Date(lateness.start));
  const [startTime, setStartTime] = useState(
    new Date(lateness.start).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );
  const [endDate, setEndDate] = useState(new Date(lateness.end));
  const [endTime, setEndTime] = useState(
    new Date(lateness.end).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );

  // console.log(startTime)
  const [deductionAmmount, setDeductionAmount] = useState(
    lateness.deductionAmmount
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const start = new Date(
      startDate.toDateString() + " " + startTime
    ).toISOString();
    const end = new Date(endDate.toDateString() + " " + endTime).toISOString();
    const response = await fetch(`${config.baseURL}/lateness/${lateness._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ start, end, deductionAmmount }),
    });
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="datePickerHolder">
        <label style={{display:"flex", flexDirection:"column"}}>
          Start Date:
          <input
            className="form-inputs"
            type="date"
            value={startDate.toISOString().substr(0, 10)}
            onChange={(event) => setStartDate(new Date(event.target.value))}
          />
        </label>
    
        <label  style={{display:"flex", flexDirection:"column"}}>
          Start Time:
          <input
            className="form-inputs"
            type="time"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
          />
        </label>
      </div>
      <br />
      <div className="datePickerHolder">
        <label  style={{display:"flex", flexDirection:"column"}}>
          End Date:
          <input
            className="form-inputs"
            type="date"
            value={endDate.toISOString().substr(0, 10)}
            onChange={(event) => setEndDate(new Date(event.target.value))}
          />
        </label>
        <label  style={{display:"flex", flexDirection:"column"}}>
          End Time:
          <input
            className="form-inputs"
            type="time"
            value={endTime}
            onChange={(event) => setEndTime(event.target.value)}
          />
        </label>
      </div>
      <br />
      <label style={{display:"flex", flexDirection:"column"}}> 
        Deduction Amount:
        <input
          className="form-inputs"
          type="number"
          value={deductionAmmount}
          onChange={(event) => setDeductionAmount(event.target.value)}
        />
      </label>

      <br />
      <button type="submit" style={{ width: 200 }}>
        Update
      </button>
    </form>
  );
}

export default DateTimePicker;

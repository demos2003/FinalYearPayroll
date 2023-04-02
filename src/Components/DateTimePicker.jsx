import React, { useState } from "react";
import config from "../config";

function DateTimePicker({ lateness }) {
  const [startDate, setStartDate] = useState(new Date(lateness.start));
  const [startTime, setStartTime] = useState(
    new Date(lateness.start).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const [endDate, setEndDate] = useState(new Date(lateness.end));
  const [endTime, setEndTime] = useState(
    new Date(lateness.end).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const [deductionAmount, setDeductionAmount] = useState(lateness.deductionAmmount);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const start = new Date(
      startDate.toDateString() + " " + startTime
    ).toISOString();
    const end = new Date(endDate.toDateString() + " " + endTime).toISOString();
    const response = await fetch(`${config.baseURL}/lateness/${lateness._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ start, end, deductionAmount }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Start Date:
        <input
          type="date"
          value={startDate.toISOString().substr(0, 10)}
          onChange={(event) => setStartDate(new Date(event.target.value))}
        />
      </label>
      <label>
        Start Time:
        <input
          type="time"
          value={startTime}
          onChange={(event) => setStartTime(event.target.value)}
        />
      </label>
      <br />
      <label>
        End Date:
        <input
          type="date"
          value={endDate.toISOString().substr(0, 10)}
          onChange={(event) => setEndDate(new Date(event.target.value))}
        />
      </label>
      <label>
        End Time:
        <input
          type="time"
          value={endTime}
          onChange={(event) => setEndTime(event.target.value)}
        />
      </label>
      <br />
      <label>
        Deduction Amount:
        <input
          type="number"
          value={deductionAmount}
          onChange={(event) => setDeductionAmount(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Update</button>
    </form>
  );
}

export default DateTimePicker
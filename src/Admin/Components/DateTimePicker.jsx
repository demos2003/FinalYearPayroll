import React, { useState } from "react";
import config from "../../config";

function DateTimePicker({ lateness }) {
  const [startDate, setStartDate] = useState(new Date(lateness.startTime));
  const [startTime2, setStartTime] = useState(
    new Date(lateness.startTime).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );

  const [lateMarkStartDate, setLateMarkStartDate] = useState(
    new Date(lateness.lateMarkStartTime)
  );
  const [lateMarkStartTime2, setLateMarkStartTime] = useState(
    new Date(lateness.lateMarkStartTime).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );

  const [lateMarkEndDate, setLateMarkEndDate] = useState(
    new Date(lateness.lateMarkEndTime)
  );
  const [lateMarkEndTime2, setLateMarkEndTime] = useState(
    new Date(lateness.lateMarkEndTime).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );

  const [deductionPercentage, setDeductionPercentage] = useState(
    lateness.deductionPercentage
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const startTime = new Date(
      startDate.toDateString() + " " + startTime2
    ).toISOString();
    const lateMarkStartTime = new Date(
      lateMarkStartDate.toDateString() + " " + lateMarkStartTime2
    ).toISOString();
    const lateMarkEndTime = new Date(
      lateMarkEndDate.toDateString() + " " + lateMarkEndTime2
    ).toISOString();
    const response = await fetch(`${config.baseURL}/lateness/${lateness._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        startTime,
        lateMarkStartTime,
        lateMarkEndTime,
        deductionPercentage,
      }),
    });
    if (response.ok) {
      window.location.reload();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="datePickerHolder">
        <label style={{ display: "flex", flexDirection: "column" , width:"50%" }}>
          Start Date:
          <input
            className="form-inputs datePicker"
            type="date"
            value={startDate.toISOString().substr(0, 10)}
            onChange={(event) => setStartDate(new Date(event.target.value))}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column" , width:"50%" }}>
          Start Time:
          <input
            className="form-inputs datePicker"
            type="time"
            value={startTime2}
            onChange={(event) => setStartTime(event.target.value)}
          />
        </label>
      </div>
      <br />
      <div className="datePickerHolder">
        <label style={{ display: "flex", flexDirection: "column" , width:"50%" }}>
          Late Start Date:
          <input
            className="form-inputs datePicker"
            type="date"
            value={lateMarkStartDate.toISOString().substr(0, 10)}
            onChange={(event) =>
              setLateMarkStartDate(new Date(event.target.value))
            }
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column" , width:"50%" }}>
          Late Start Time:
          <input
            className="form-inputs datePicker"
            type="time"
            value={lateMarkStartTime2}
            onChange={(event) => setLateMarkStartTime(event.target.value)}
          />
        </label>
      </div>
      <br />
      <div className="datePickerHolder">
        <label style={{ display: "flex", flexDirection: "column" , width:"50%" }}>
          End Date:
          <input
            className="form-inputs datePicker1"
            type="date"
            value={lateMarkEndDate.toISOString().substr(0, 10)}
            onChange={(event) =>
              setLateMarkEndDate(new Date(event.target.value))
            }
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", width:"50%" }}>
          End Time:
          <input
            className="form-inputs datePicker1"
            type="time"
            value={lateMarkEndTime2}
            onChange={(event) => setLateMarkEndTime(event.target.value)}
          />
        </label>
      </div>
      <br />
      <label style={{ display: "flex", flexDirection: "column" , width:"50%" }}>
        Deduction Amount:
        <input
          className="form-inputs datePicker1"
          type="number"
          value={deductionPercentage}
          onChange={(event) => setDeductionPercentage(event.target.value)}
        />
      </label>

      <br />
      <button type="submit" style={{ width: 200, backgroundColor:"#5d3fd3", color:"white", border:"none", padding:"5px" }}>
        Update
      </button>
    </form>
  );
}

export default DateTimePicker;

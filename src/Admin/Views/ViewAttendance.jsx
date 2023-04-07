import axios from "axios";
import React, { useEffect, useState } from "react";
import DateTimePicker from "../Components/DateTimePicker";
import config from "../../config";


const ViewAttendance = () => {
  const [lateness, setLateness] = useState();
  const [selectedOption, setSelectedOption] = useState("daily");

  useEffect(() => {
    const fetchLateness = async () => {
      const res = await axios.get(`${config.baseURL}/lateness`);
      setLateness(res.data[0]);
    };
    fetchLateness();
  });

  const AttendanceTable = ({ item }) => {
    const timeString = item.createdAt;
    const date = new Date(timeString);
    const formattedTime = date.toLocaleTimeString({
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }); // "08:09"

    return (
      <div>
        <table className="table table-bordered fixed tableWidth ">
          <tbody className="">
            <tr>
              <td className="columnWidth">
                <div>{item.employee._id}</div>
              </td>
              <td className="columnWidth">
                <div>{item.employee.name}</div>
              </td>
              <td className="columnWidth">
                <div>{formattedTime}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

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

  const [attendance, getAttendance] = useState([]);
  useEffect(() => {
    const fetchAttendance = async () => {
      const res = await axios.get(`${config.baseURL}/attendance`);
      getAttendance(res.data);
    };
    fetchAttendance();
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderAttendanceData = () => {
    if (selectedOption === "daily") {
      return (
        <div>
          {dailyAttendance.map((item) => (
            <AttendanceTable item={item} />
          ))}
        </div>
      );
    } else if (selectedOption === "monthly") {
      return (
        <div>
          {attendance.map((item) => (
            <AttendanceTable item={item} />
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <div className="attendTable">
        <h1 className="active_pagehea">ATTENDANCE</h1>

        <select
          value={selectedOption}
          onChange={handleChange}
          style={{ position: "relative", left: 720, top: -20 }}
        >
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
        </select>
        <div className="table-holder attendance_table-holder">
          <table className="table table-bordered tableWidth attendance_table">
            <thead className="tableWidth">
              <tr className="tableWidth">
                <th scope="col" className="columnWidth">
                  Employee ID
                </th>
                <th scope="col" className="columnWidth">
                  Name
                </th>
                <th scope="col" className="columnWidth">
                  Time in
                </th>
              </tr>
            </thead>
          </table>

          {renderAttendanceData()}
        </div>
        <h4>Attendance Time Picker</h4>
        <div>
          {lateness ? <DateTimePicker lateness={lateness} /> : <>Loading</>}
        </div>
      </div>
    </div>
  );
};

export default ViewAttendance;

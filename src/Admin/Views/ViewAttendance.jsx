import axios from "axios";
import React, { useEffect, useState } from "react";
import DateTimePicker from "../Components/DateTimePicker";
import config from "../../config";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
        <StyledTableRow>
          <StyledTableCell className="columnWidth">
            {item.employee._id}
          </StyledTableCell>
          <StyledTableCell className="columnWidth">
            {item.employee.name}
          </StyledTableCell>
          <StyledTableCell className="columnWidth">
            {formattedTime}
          </StyledTableCell>
        </StyledTableRow>
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

  console.log(dailyAttendance);

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

  return (
    <div style={{ marginTop: 50, backgroundColor: "whitesmoke" }}>
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
          <TableContainer
            component={Paper}
            style={{ marginTop: 40, marginBottom: 20 }}
            id="TableCont"
          >
            <Table sx={{ minWidth: 550 }} aria-label="customized table">
              <TableHead style={{ position: "sticky", top: 0, zIndex: 0, backgroundColor:"white" }}>
                <TableRow>
                  <TableCell className="columnWidth">Employee ID</TableCell>
                  <TableCell className="columnWidth">Name</TableCell>
                  <TableCell className="columnWidth">Time in &nbsp;</TableCell>
                </TableRow>
              </TableHead>

              {selectedOption === "daily" ? (
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
              ) : selectedOption === "monthly" ? (
                <TableBody>
                  {attendance.map((item) => (
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
              ) : null}
            </Table>
          </TableContainer>
        </div>
        <h4>Attendance Time Picker</h4>
        <div>
          {lateness ? <DateTimePicker lateness={lateness} /> : <>Loading</>}
        </div>
      </div>
      <div style={{ height: 50 }}></div>
    </div>
  );
};

export default ViewAttendance;

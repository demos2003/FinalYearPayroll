import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./PDF";
import axios from "axios";
import { useState } from "react";
import config from "../../config";
import { useEffect } from "react";

function PdFView({employee, pay}) {
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
  return (
    <div style={{ width: 570, height: 500, marginTop: 10 }}>
      {<MyDocument attendance={attendance} employee={employee} pay={pay}/>}
    </div>
  );
}

export default PdFView;

import "../src/Views/CSS/App.css";
import Login from "../src/Views/Login";
import { Dashboard } from "../src/Views/Dashboard";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Attendance from "../src/Views/Attendance";
import Employees from "../src/Views/Employees";
import Positions from "../src/Views/Positions";
import EmployeePage from "../src/Views/EmployeePage";
import Deductions from "../src/Views/Deductions";
import UserLogin from "./Views/UserLogin";
import { UserHomepage } from "./Views/UserHomepage";
import {
  EmployeeContextProvider,
  AdminContextProvider,
  employeeContext,
  adminContext,
} from "./Context/Context";
import { useContext } from "react";
import { useState } from "react";

export default function App() {
  const { employee } = useContext(employeeContext);
  const { admin } = useContext(adminContext);
  // console.log(admin);
  return (
    <div className="App">
      <BrowserRouter>
        <AdminContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard admin={admin} />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/employees" element={<Employees />} />
            {/* <Route path="UserHomepage" element={<UserHomepage />} /> */}

            {/* <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dash />} />
          <Route path="/dashboard" element={<Dash />} />
          <Route path="/attendance" element={<Attend />} />
          <Route path="/employees" element={<Employ />} />
          <Route path="/positions" element={<Postion />} />
          <Route path="/employeePage" element={<EPage />} />
          <Route path="/deductions" element={<Deduc />} />
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="UserHomepage" element={<UserHomepage />} /> */}
          </Routes>
        </AdminContextProvider>
        <EmployeeContextProvider>
          <Routes>
          <Route path="/UserLogin" element={<UserLogin  />} />
          <Route path="UserHomepage" element={<UserHomepage employee={employee}/>} />

          </Routes>
        </EmployeeContextProvider>
      </BrowserRouter>
    </div>
  );
}

// function Dash() {
//   return <Dashboard />;
// }

// function Attend() {
//   return <Attendance />;
// }

// function Employ() {
//   return <Employees />;
// }

// function Postion() {
//   return <Positions />;
// }

// function EPage() {
//   return <EmployeePage />;
// }

// function Deduc() {
//   return <Deductions />;
// }

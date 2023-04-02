import "../src/Views/CSS/App.css";
import Login from "../src/Views/Login";
import { Dashboard } from "../src/Views/Dashboard";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Attendance from "../src/Views/Attendance";
import Employees from "../src/Views/Employees";
import Positions from "../src/Views/Positions";
import EmployeeSettings from "../src/Views/EmployeeSettings";
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

export default function App() {
  let { employee } = useContext(employeeContext);
  const { admin } = useContext(adminContext);

  if (!employee) {
    employee = "";
  }
  return (
    <div className="App">
      <BrowserRouter>
        <AdminContextProvider>
          <Routes>
          
            <Route path="/" element={<Login />} />

            <Route path="/Dashboard" element={<Dashboard admin={admin} />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/employees" element={<Employees />} />
          </Routes>
        </AdminContextProvider>
        <EmployeeContextProvider>
          <Routes>
            <Route path="/UserLogin" element={<UserLogin />} />
            <Route
              path="UserHomepage"
              element={<UserHomepage employee={employee.user} />}
            />
          </Routes>
        </EmployeeContextProvider>
      </BrowserRouter>
    </div>
  );
}

import Login from "./Admin/Views/Login";
import ViewAttendance from "./Admin/Views/ViewAttendance";
import DashboardCont from "./Admin/Views/DashbardCont";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Position from "./Admin/Views/Positions";
import EmployeeRoute from "./Employee/EmployeeRoute";
import Employees from "./Admin/Views/Employees";
import EmployeeSettings from "./Employee/Views/EmployeeSettings";
import UserLogin from "./Employee/Views/UserLogin";
import AdminPayroll from "./Admin/Views/AdminPayroll";
import Admin from "./Admin/Admin";
import { StaffAttendance } from "./Employee/Views/StaffAttendance";
import { Payslip } from "./Employee/Views/Payslip";
import Landing from "./Admin/Views/Landing";

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
            <Route path="/" element={<Landing/>}/>
            <Route path="/Login" element={<Login />} />
            <Route element={admin ? <Admin admin={admin} /> : <Login />}>
              <Route
                path="/dashboard"
                element={<DashboardCont admin={admin} />}
              />
              <Route path="/attendance" element={<ViewAttendance admin={admin}/>} />
              <Route path="/employees" element={<Employees admin={admin}/>} />
              <Route path="/postions" element={<Position admin={admin}/>} />
              <Route path="/payroll" element={<AdminPayroll admin={admin}/>} />
            </Route>
          </Routes>
        </AdminContextProvider>
        <EmployeeContextProvider>
          <Routes>
            <Route path="/UserLogin" element={<UserLogin />} />
            <Route element={ employee ? <EmployeeRoute employee={employee.user} /> : <UserLogin /> }>
            <Route path="/settings" element={<EmployeeSettings employee={employee.user} />} />
            <Route path="/staffattendance" element={<StaffAttendance employee={employee.user} />} />
            <Route path="/payslip" element={<Payslip employee={employee.user}/>} /> 
         

              </Route>
          </Routes>
        </EmployeeContextProvider>
      </BrowserRouter>
    </div>
  );
}

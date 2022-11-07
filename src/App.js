
import '../src/Views/App.css';
import Login from '../src/Views/Login';
import {Dashboard} from '../src/Views/Dashboard'
// import './bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import "react-bootstrap";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Attendance from '../src/Views/Attendance';
import Employees from '../src/Views/Employees';
import Positions from '../src/Views/Positions';
import Payroll from '../src/Views/Payroll';
import EmployeePage from '../src/Views/EmployeePage';
import Deductions from '../src/Views/Deductions';


export default function App() {
  return (
    <Router>
  <div className="App">
   <Routes>
          <Route path="/login" element={<Login/>} />
            
          <Route path="/" element ={<Dash/>} />
          <Route path="/dashboard" element ={<Dash/>} />
         
         
          {/* <Route path="/" element={<Home/>} /> */}

          <Route path="/attendance" element={<Attend/>} />
          
          <Route path="/employees" element={<Employ/>} />
          <Route path="/positions" element={<Postion/>} />
          <Route path="/payroll" element={<Pay/>} />
          <Route path="/employeePage" element={<EPage/>} />
          <Route path="/deductions" element={<Deduc/>} />
        </Routes>
    </div>
    </Router>
     

  );
}
function Home() {
  return <h2>Home</h2>;
  }
  
function Dash(){
  return <Dashboard/>;
}
  
  function Attend() {
  return <Attendance/>;
  }

  function Employ(){
    return <Employees/>
  }

  function Postion(){
    return<Positions/>
  }

  function Pay(){
    return<Payroll/>
  }

  function EPage(){
    return<EmployeePage/>
  }

  function Deduc(){
    return<Deductions/>
  }

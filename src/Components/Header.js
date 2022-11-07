import '../Views/App.css';
import React from 'react';
import { Link } from "react-router-dom";

function Header(){
    return(
        <div>
             <div className='header'>
          <ul>
              <l1>PAYROLL</l1>
              <l1 className="others">Admin</l1>
              <l1 className="others">Login</l1>
          </ul>
      </div>
      <div className='nav'>
           <div className='links'>
           <Link to="/dashboard" className='link1'>
           <a href='#' className='link1'>Dashboard</a>
           </Link>
              
               <Link to="/employees" className="link1">
               <a href='#' className='link1'>Employees</a>
             </Link>
             <Link to="/employees" className="link1">
               <a href='#' className='link1'>Deductions</a>
             </Link>
             <Link to="/positions" className="link1">
               <a href='#' className='link1'>Positions</a>
             </Link>
             <Link to="/payroll" className="link1">
               <a href='#' className='link1'>Payroll</a>
             </Link>
            </div>
            
      </div>
      
        </div>
    );
}

export default Header;
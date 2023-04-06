import React from 'react'
import EmployeeSidebar from './EmployeeSidebar/EmployeeSidebar';
import { Outlet } from 'react-router-dom';

const EmployeeRoute = ({employee}) => {
  return (
    <div className="AdminFullPage2">
      <div className="sidebar-container">
         <EmployeeSidebar employee={employee}/>
      </div>
      <div className="outlet-contaner">
      <Outlet />
      </div>
    </div>
  )
}

export default EmployeeRoute

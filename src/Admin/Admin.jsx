import React from "react";
import AdminSideBar from "./Sidebar/AdminSideBar";
import { Outlet } from "react-router-dom";

const Admin = ({admin}) => {


  return (
    <div className="AdminFullPage">
      <div className="sidebar-container">
        <AdminSideBar admin={admin} />
      </div>
      <div className="outlet-contaner">
      <Outlet />
      </div>
    </div>
  );
};

export default Admin;

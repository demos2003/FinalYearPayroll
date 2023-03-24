import "./CSS/App.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Editbtn from "../Components/Editbtn";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";
import Popup1 from "../Components/Popup1";
import axios from "axios";
import config from "../config";
import EmployeesTable from "../Components/EmployeesTable";

function Employees() {
  const [buttonPopup2, setBP2] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [sex, setSex] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [positonId, getPositionId] = useState([]);
  useEffect(() => {
    const fetchpositonData = async () => {
      const res = await axios.get(`${config.baseURL}/position`);
      getPositionId(res.data);
    };
    fetchpositonData();
  }, []);

  const [employee, getEmployee] = useState([]);
  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await axios.get(`${config.baseURL}/employee`);
      getEmployee(res.data);
    }
    fetchEmployee();
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${config.baseURL}/auth/register/employee`, {
        name,
        address,
        phoneNo,
        sex,
        position,
        email,
        password,
      });
      res.data && window.location.reload();
    } catch (err) {}
  };

  return (
    <div>
      {/* <Header/> */}
      <div className="table-holder">
        <button className="AddEmployee" onClick={() => setBP2(true)}>
          Add
          <AiOutlineUserAdd className="add-icon" />
        </button>
        <Popup1
          handleSubmit={handleSubmit}
          trigger={buttonPopup2}
          setTrigger={setBP2}
        >
          <form onSubmit={handleSubmit}>
            <h2>Add Employee </h2>
            <div className="form-row">
              <div className="form-group form-edit">
                <label htmlFor="inputEmail4">Name</label>
                <input
                  type="text"
                  className="form-control input-edit"
                  id="inputAddress"
                  placeholder="First Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group form-edit">
                <label htmlFor="inputEmail4">Address</label>
                <input
                  type="text"
                  className="form-control input-edit"
                  id="inputAddress"
                  placeholder="1 magodo brooks estate, Lagos Nigeria"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group form-edit">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control input-edit"
                  id="inputAddress"
                  placeholder="ladenas155@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group form-edit">
                <label htmlFor="inputEmail4">Phone Number</label>
                <input
                  type="text"
                  className="form-control input-edit"
                  id="inputAddress"
                  placeholder="08188102756"
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group form-edit">
                <label htmlFor="inputEmail4">Password</label>
                <input
                  type="password"
                  className="form-control input-edit"
                  id="inputAddress"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group ">
                <label htmlFor="inputState">Gender</label>
                <select
                  id="sex"
                  className="form-control"
                  onChange={(e) => setSex(e.target.value)}
                >
                  <option value="selectgender">--Select a Category--</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="inputState">Position</label>
                <select
                  id="inputState"
                  className="form-control"
                  onChange={(e) => setPosition(e.target.value)}
                >
                  <option value="selectuser">--Select a Category--</option>
                  {positonId.map((item) => (
                    <option value={item._id} key={item._id}>
                      {item.name}
                    </option>
                  ))}
                  <option>Others</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary save-btn">
              Save
            </button>
          </form>
        </Popup1>
        <h1 style={{ marginTop: 50 }}>EMPLOYEES</h1>
        <table className="table table-bordered table-width table-width2">
          <thead>
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Controls</th>
            </tr>
          </thead>
        </table>
        {
          employee.map((emp) => (
            <EmployeesTable emp={emp}/>
          ))
        }
        
      </div>
      <div className="attendTable" style={{ marginTop: 100 }}>
        <h1 className="active_pagehead">ATTENDANCE</h1>
        <div className="table-holder attendance_table-holder">
          <table className="table table-bordered table-width attendance_table">
            <thead>
              <tr>
                <th scope="col">Employee ID</th>
                <th scope="col">Name</th>
                <th scope="col">Time in</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ABC1234657</td>
                <td>Ugo Justice</td>
                <td>01:30 AM</td>
              </tr>
              <tr>
                <td>ABDA124865</td>
                <td>Nasiru Iyidemilade</td>
                <td>02:40 PM</td>
              </tr>
              <tr>
                <td>ADCTDB$@#</td>
                <td>Micheal Jackson</td>
                <td>03:45 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employees;

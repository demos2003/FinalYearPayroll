import React, { useState, useEffect } from "react";
import "./CSS/App.css";
import LongBtn from "./Long-btn";
import PositionBtn from "../Components/PositionBtn";
import "./CSS/Position.css";
import { PopUp3 } from "./PopUp3";
import axios from "axios";
import config from "../config";

function Position() {
  const [name, setNewName] = useState("")
  const [pay, setPay] = useState("")
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.prevent.Default();
    setError(false);
    try {
      const res = await axios.post(`${config.baseURL}/position`, {
        name,
        pay
      });
      res.data && window.location.reload();
    } catch (err) {
      setError(true);
    }
  };



  const [addPopUp, setAddPopUp] = useState(false);
  return (
    <div style={{ marginTop: 70 }}>
      <h1 className="active_pagehead">POSITIONS</h1>

      <button className="AddEmployee" onClick={() => setAddPopUp(true)}>
        Add
      </button>
      <PopUp3 trigger={addPopUp} setTrigger={setAddPopUp} handleSubmit={handleSubmit}>
        <form handleSubmit={handleSubmit}>
        <div class="form-row">
          <div class="form-group form-edit">
            <label for="inputEmail4">Position Title</label>
            <input
              type="text"
              class="form-control input-edit"
              id="inputAddress"
              onChange={(e) => setNewName(e.target.value)}
            ></input>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group form-edit">
            <label for="inputEmail4">Rate Per Day</label>
            <input
              type="text"
              class="form-control input-edit"
              id="inputAddress"
              onChange={(e) => setPay(e.target.value)}
            ></input>
          </div>
        </div>
        </form>
      </PopUp3>
      <div className="table-holder table-holder3">
        <table class="table table-bordered postion-table table-striped">
          <thead>
            <tr>
              <th scope="col">Position Title</th>
              <th scope="col">Rate PER Hour (#)</th>
              <th scope="col">Tools</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Programmer</th>
              <td>100.00</td>
              <td>
                <PositionBtn />
              </td>
            </tr>
            <tr>
              <th scope="row">Senior Developer</th>
              <td>300.00</td>
              <td>
                <PositionBtn />
              </td>
            </tr>
            <tr>
              <th scope="row">Ui Designer</th>
              <td>100.00</td>
              <td>
                <PositionBtn />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pos-longBtn">
          <LongBtn />
        </div>
      </div>
    </div>
  );
}

export default Position;

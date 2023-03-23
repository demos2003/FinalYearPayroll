import React, { useState } from "react";
import "./CSS/App.css";
import LongBtn from "./Long-btn";
import PositionBtn from "../Components/PositionBtn";
import "./CSS/Position.css";
import { PopUp3 } from "./PopUp3";

function Position() {
  const [addPopUp, setAddPopUp] = useState(false);
  return (
    <div style={{ marginTop: 70 }}>
      <h1 className="active_pagehead">POSITIONS</h1>
      {/* <Header/> */}
      <button className="AddEmployee" onClick={() => setAddPopUp(true)}>
        Add
      </button>
      <PopUp3 trigger={addPopUp} setTrigger={setAddPopUp}>
        <div class="form-row">
          <div class="form-group form-edit">
            <label for="inputEmail4">Position Title</label>
            <input
              type="text"
              class="form-control input-edit"
              id="inputAddress"
              // placeholder="First Name"
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
              // placeholder="First Name"
            ></input>
          </div>
        </div>
      </PopUp3>
      <div className="table-holder table-holder3">
        {/* <Searchbar/>   */}
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

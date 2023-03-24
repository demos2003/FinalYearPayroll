import React, { useState, useEffect } from "react";
import "./CSS/App.css";
import LongBtn from "./Long-btn";
import PositionBtn from "../Components/PositionBtn";
import "./CSS/Position.css";
import { PopUp3 } from "./PopUp3";
import axios from "axios";
import config from "../config";
import PositionTable from "../Components/PositionTable";

function Position() {
  const [name, setNewName] = useState("")
  const [pay, setPay] = useState("")
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${config.baseURL}/position`, {
        name,
        pay,
      });
      res.data && window.location.reload();
    } catch (err) {
    }
  };


  const [positonId, getPositionId] = useState([]);
  useEffect(() => {

    const fetchpositonData = async () => {
      const res = await axios.get(`${config.baseURL}/position`);
      getPositionId(res.data);
    };
    fetchpositonData();

  }, [])



  const [addPopUp, setAddPopUp] = useState(false);
  return (
    <div style={{ marginTop: 70 }}>
      <h1 className="active_pagehead">POSITIONS</h1>

      <button className="AddEmployee" onClick={() => setAddPopUp(true)}>
        Add
      </button>
      <PopUp3 trigger={addPopUp} setTrigger={setAddPopUp} handleSubmit={handleSubmit}>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-primary save-btn">
              Save
            </button>
        </div>
        </form>
      </PopUp3>
      <div className="table-holder table-holder3">
        <table className="table table-bordered postion-table table-striped">
          <thead>
            <tr>
              <th scope="col" className="content-holder">Position Title</th>
              <th scope="col" className="content-holder">Rate PER Hour (#)</th>
              <th scope="col" className="content-holder">Tools</th>
            </tr>
          </thead>
         </table>
         {
            positonId.map((item) => (
              <PositionTable item={item}/>
            ))
          }
        <div className="pos-longBtn">
          <LongBtn />
        </div>
      </div>
    </div>
  );
}

export default Position;

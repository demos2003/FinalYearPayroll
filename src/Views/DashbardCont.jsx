import "./CSS/App.css";
import "./CSS/Dashboard.css";
import React from "react";
import { AiOutlineUser, AiOutlineCalendar } from "react-icons/ai";
import { BiRun } from "react-icons/bi";
import { MdOutlineSick } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";
import Popup1 from "../Components/Popup1";
import "bootstrap/dist/css/bootstrap.css";
import Calender from "../Components/Calender";

function DashboardCont() {
  const [buttonPopup2, setBP2] = useState(false);
  return (
    <div className="top_card">
      <div className="cardhold">
        <div className="slip slip1">
          <div className="slip_hold">
            <div className="content">
              <div style={{ fontSize: "10px" }}>EMPLOYEES:</div>{" "}
              <div style={{ fontSize: "35px" }}>50</div>
            </div>
            <div className="IconB">
              <AiOutlineUser />
            </div>
          </div>
        </div>
        <div className="slip slip2">
          <div className="slip_hold">
            <div className="content">
              <div style={{ fontSize: "10px" }}>SPRINT:</div>{" "}
              <div style={{ fontSize: "35px" }}>12</div>
            </div>
            <div className="IconB">
              <BiRun />
            </div>
          </div>
        </div>
        <div className="slip slip3">
          <div className="slip_hold">
            <div className="content">
              <div style={{ fontSize: "10px" }}>SICK LEAVE:</div>{" "}
              <div style={{ fontSize: "35px" }}>0</div>
            </div>
            <div className="IconB">
              <MdOutlineSick />
            </div>
          </div>
        </div>
        <div className="slip slip4">
          {" "}
          <div className="slip_hold">
            <div className="content">
              <div style={{ fontSize: "10px" }}>APPOINTMENTS:</div>{" "}
              <div style={{ fontSize: "35px" }}>2</div>
            </div>
            <div className="IconB">
              <AiOutlineCalendar />
            </div>
          </div>
        </div>
      </div>

      <div className="tablee">
        <div className="table-holder1">
          <h4>Employees</h4>
          <hr></hr>
          {/* <button className='AddEmployee' onClick={() => setBP2(true)}>Add<AiOutlineUserAdd className='add-icon'/></button> */}
          <Popup1 trigger={buttonPopup2} setTrigger={setBP2}>
            <form>
              <h2>Add Employee </h2>
              <div class="form-row">
                <div class="form-group form-edit">
                  <label for="inputEmail4">Name</label>
                  <input
                    type="text"
                    class="form-control input-edit"
                    id="inputAddress"
                    placeholder="First Name"
                  ></input>
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress">Position</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                ></input>
              </div>
              <div class="form-group">
                <label for="inputAddress2">Schedule</label>
                <input
                  type="number"
                  class="form-control"
                  id="inputAddress2"
                ></input>
              </div>
              <div class="form-row">
                <div class="form-group ">
                  <label for="inputState">Gender</label>
                  <select id="inputState" class="form-control">
                    <option selected>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="inputState">Position</label>
                  <select id="inputState" class="form-control">
                    <option selected>UI Designer</option>
                    <option>Developer</option>
                    <option>Tester</option>
                    <option>Others</option>
                  </select>
                </div>
                <div class="input-group mb-3 mt-2">
                  <div class="custom-file">
                    <label>Photo</label>
                    <br></br>
                    <input
                      type="file"
                      class="custom-file-input"
                      id="inputGroupFile01"
                    ></input>
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary save-btn">
                Save
              </button>
            </form>
          </Popup1>
          <table class="table table-bordered table-width employess_table">
            <thead>
              <tr>
                <th scope="col">Employee ID</th>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Schedule</th>
                <th scope="col">Member Since</th>
                {/* <th scope="col">Tools</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">ABC1234657</th>
                <td>Ugo Justice</td>
                <td>UI designer</td>
                <td>08:00 AM - 05:00 PM</td>
                <td>2019</td>
                {/* <td><Editbtn/></td> */}
              </tr>
              <tr>
                <th scope="row">ABC1234657</th>
                <td>Ugo Justice</td>
                <td>Senior</td>
                <td>Remote</td>
                <td>2019</td>
                {/* <td><Editbtn/></td> */}
              </tr>
              <tr>
                <th scope="row">ABC1234657</th>
                <td>Ugo Justice</td>
                <td>Senior</td>
                <td>Remote</td>
                <td>2019</td>
                {/* <td><Editbtn/></td> */}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="calendar-pos">
          <Calender />
        </div>
      </div>
    </div>
  );
}

export default DashboardCont;

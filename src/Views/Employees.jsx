import './App.css';
import React from 'react';
import Header from '../Components/Header.js';
import 'bootstrap/dist/css/bootstrap.css';
import Editbtn from '../Components/Editbtn';
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from 'react';
import Popup1 from '../Components/Popup1';


function Attendance(){
  const [buttonPopup2, setBP2 ] = useState(false);

    return(
        <div>
           {/* <Header/> */}
           <div className='table-holder'>
       <button className='AddEmployee' onClick={() => setBP2(true)}>Add<AiOutlineUserAdd className='add-icon'/></button>
       <Popup1 trigger={buttonPopup2} setTrigger={setBP2}>
       <form>
            <h2>Add Employee </h2>
        <div class="form-row">
         <div class="form-group form-edit">
              <label for="inputEmail4">Name</label>
              <input type="text" class="form-control input-edit" id="inputAddress" placeholder="First Name"></input>
          </div>
        
      </div>
        <div class="form-group">
            <label for="inputAddress">Position</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
        </div>
        <div class="form-group">
            <label for="inputAddress2">Schedule</label>
            <input type="number" class="form-control" id="inputAddress2"></input>
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
            <label>Photo</label><br></br>
            <input type="file" class="custom-file-input" id="inputGroupFile01"></input>
          </div>
        </div>
        </div>
        <button type="submit" class="btn btn-primary save-btn">Save</button>
      </form>
       </Popup1>


                    <table class="table table-bordered table-width table-width2">
  <thead>
    <tr>
      <th scope="col">Employee ID</th>
      <th scope="col">Name</th>
      <th scope="col">Sign In </th>
      <th scope="col">Sign Out</th>
      <th scope="col">Interval</th>
      <th scope="col">Member Since</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">ABC1234657</th>
      <td>Ugo Justice</td>
      <td>UI designer</td>
      <td>08:00 AM - 05:00 PM</td>
      <td>2019</td>
      <td><Editbtn/></td>
    </tr>
    <tr>
    <th scope="row">ABC1234657</th>
      <td>Ugo Justice</td>
      <td>Senior</td>
      <td>Remote</td>
      <td>2019</td>
      <td><Editbtn/></td>
    </tr>
    <tr>
    <th scope="row">ABC1234657</th>
      <td>Ugo Justice</td>
      <td>Senior</td>
      <td>Remote</td>           
      <td>2019</td>
      <td><Editbtn/></td>
    </tr>
  </tbody>
</table>

            </div>
            
        </div>
    );
}

export default Attendance;
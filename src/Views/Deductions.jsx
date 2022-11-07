import './App.css';
import React from 'react';
import Header from '../Components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Editbtn from '../Components/Editbtn';
import "./deductions.css"



function Deductions(){
    return(
        <div>
          <h1 className='active_pagehead'>EMPLOYEES</h1>
         {/* <Header/> */}
         <div className='table-holder'>
       {/* <button className='AddEmployee'>Add<AiOutlineUserAdd className='add-icon'/></button> */}
                    <table class="table table-striped table-width table-width2">
  <thead>
    <tr>
      <th scope="col">Employee ID</th>
      <th scope="col">Name</th>
      <th scope="col">Position</th>
      <th scope="col">Schedule</th>
      <th scope="col">Member Since</th>
      <th scope="col">Tools</th>
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


export default Deductions;

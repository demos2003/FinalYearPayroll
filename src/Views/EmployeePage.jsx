import React from 'react'
import './App.css';
import {BsTelephone, BsPerson} from  "react-icons/bs";
import {AiOutlineMail, AiOutlineCalendar, AiOutlineArrowRight} from "react-icons/ai"
import {BiHomeAlt} from "react-icons/bi"
import { VictoryPie } from 'victory';
import 'bootstrap/dist/css/bootstrap.css';

// import PieChart from './PieChart';




function EmployeePage() {
  return (
      <div>
    <div className='header'>
    <ul>
        <l1>PAYROLL</l1>
        <l1 className="others">Admin</l1>
        <l1 className="others">Login</l1>
    </ul>
    </div>
    <div className='Epage-body'>
        <div className='staff-left'>
        <div className='image-holder'>
        <img src="/images/staticStaff.jpg" alt="staff" width="300px" height="400px"/>
        </div>
        <div className='info-holder'>
          <h3>Staff Name</h3>
          <div className='mini-info'>
             <BsTelephone className='icon-pos2' /> <div>Phone
              <p className='info-style'>08188102756</p>
              </div>
          </div>
          <div className='mini-info'>
          <AiOutlineMail className='icon-pos2'/> <div>Email
              <p  className='info-style'>Ladenas202@gmail.com</p>
              </div>
              
          </div>
          <div className='mini-info'>
          <AiOutlineCalendar className='icon-pos2'/> <div>Start Date
             <p  className='info-style'>June 27, 2022</p> 
             </div>
          </div>
          <div className='mini-info'>
          <BsPerson className='icon-pos2'/><div>Position
              <p  className='info-style'>Lead Developer</p>
              </div>
          </div>
          <div className='mini-info'>
          <BiHomeAlt className='icon-pos2'/><div>Address
              <p className='info-style'> Magodo brooks estate, Lagos Nigeria</p>
              </div>
          </div>    
        </div>
        </div>
        <div className='staff-right'>
            <div className='table-holder2'>
        <table class="table table-bordered table-width">
  <thead>
    <tr>
      <th scope="col">Day</th>
      <th scope="col">Clock-in-Time</th>
      <th scope="col">Clock-out-time</th>
      <th scope="col">Interval</th>
      <th scope="col">Schedule</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Monday</th>
      <td>Clock-out-time</td>
      <td>UI designer</td>
      <td>08:00</td>
      <td>2019</td>
      
    </tr>
    <tr>
    <th scope="row">Tuesday</th>
      <td>interval </td>
      <td>Senior</td>
      <td>Remote</td>
      <td>2019</td>
    
    </tr>
    <tr>
    <th scope="row">Wednesday</th>
      <td>Ugo</td>
      <td>Senior</td>
      <td>Remote</td>           
      <td>2019</td>
      
    </tr>
    <tr>
    <th scope="row">Thursday</th>
      <td>Ugo Justice</td>
      <td>Senior</td>
      <td>Remote</td>
      <td>2019</td>
     
    </tr>
    <tr>
    <th scope="row">Friday</th>
      <td>Ugo Justice</td>
      <td>Senior</td>
      <td>Remote</td>
      <td>2019</td>
      
    </tr>
  </tbody>
</table>
</div>
<div className='cardhold'>
            <div className='card-1'>
               <p className='card-font'> Attendance Charts</p><hr></hr>
               <div>
            <VictoryPie
            animate={{
                duration: 2000
              }}
              colorScale={["Green", "Red", "Orange"]}
  data={[
      
    { x: "Present", y: 80 },
    { x: "Absent", y: 5 },
    { x: "Late", y: 15 }
  ]}
  
/>
</div><div className='firstdesc'>
         <p>Green <AiOutlineArrowRight/> Present</p>
         <p>Red<AiOutlineArrowRight className='late'/>Absent</p> </div>
         <p className='card-txtAlign'>Orange <AiOutlineArrowRight className='absent'/>Late</p>
         <p></p>
         <p></p>
            </div>
            <div className='vertical-holder'>
            <div className='card-2'>
                <p className='card-font emergency-style'>Emergency Contacts</p><hr/>
                <div className='cardtxt-space'>
                <p>Name: Mike</p>
                <p>Relationship: Brother</p>
                <p>Work Phone Number: 081888888888</p>
                <p>Personal Phone Number: 081800000000</p>
                </div>
                <button className='edit-btn2'>Edit</button>
            </div>
            <div className='card-3'>
                <p className='card-font'>Employment Information</p><hr/>
                <div className='cardtxt-space'>
                <p>Start date: 2021</p>
                <p>Work Status: FreeLance</p>
                <p>Contract Length: 7 months</p>
                <p>Prior Exp: 8 years</p>
                </div>
                <button className='edit-btn2'>Edit</button>

            </div>
            </div>
          
        </div>
        </div>
        
    </div>
    </div>

  )
}

export default EmployeePage;

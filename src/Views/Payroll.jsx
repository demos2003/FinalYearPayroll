import React from 'react'
// import Header from './Header'
import './App.css';
import "./payroll.css"
import { useState } from 'react';
import Overtime from '../Components/Overtime';
import Bonus from '../Components/Bonus';
import Commision from '../Components/Commision';


const Payroll = () => {
  // const [setForm, setF3] = useState(false);
  const [active, setActive] = useState();
  
  return (
    <div>
      {/* <Header/>  */}

      <h1 className='active_pagehead'>PAYROLL</h1>
   
    <div className='table-holder table-holder3'>
    <table class="table table-striped ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Employee</th>
      <th scope="col">Hours Worked</th>
      <th scope="col">Additional Earnings</th>
      <th scope="col">Gross Pay</th>
    </tr>
  </thead>
  <tbody>
    <tr className="content_row">
      <th scope="row">1</th>
      <td className='payroll_td'>
        Nasiru Iyidemilade<br/>
        $100/per hour

      </td>
      <td className='payroll_td'>
        + 90hours<br/>
        <Overtime/>
    
       
     
      </td>
      <td className='payroll_td'>
      <Bonus/>
      <Commision/>
      + Other Earnings
      </td>
      <td className='payroll_td'>
        $700K
      </td>
    </tr>
    <tr className="content_row">
      <th scope="row">2</th>
      <td className='payroll_td'>
        Alabi Emmanuel<br/>
        $100/per hour

      </td>
      <td className='payroll_td'>
        + 90hours<br/>
        <Overtime/>
    
       
     
      </td>
      <td className='payroll_td'>
      <Bonus/>
      <Commision/>
      + Other Earnings
      </td>
      <td className='payroll_td'>
        $700K
      </td>
    </tr>
    <tr className="content_row">
      <th scope="row">3</th>
      <td className='payroll_td'>
        Charles Kenechi<br/>
        $100/per hour

      </td>
      <td className='payroll_td'>
        + 90hours<br/>
        <Overtime/>
    
       
     
      </td>
      <td className='payroll_td'>
      <Bonus/>
      <Commision/>
      + Other Earnings
      </td>
      <td className='payroll_td'>
        $700K
      </td>
    </tr><tr className="content_row">
      <th scope="row">4</th>
      <td className='payroll_td'>
        Max Kilman<br/>
        $100/per hour

      </td>
      <td className='payroll_td'>
        + 90hours<br/>
        <Overtime/>
    
       
     
      </td>
      <td className='payroll_td'>
      <Bonus/>
      <Commision/>
      + Other Earnings
      </td>
      <td className='payroll_td'>
        $700K
      </td>
    </tr>
    <tr className="content_row">
      <th scope="row">5</th>
      <td className='payroll_td'>
        Olusanya Jolaoluwa<br/>
        $100/per hour

      </td>
      <td className='payroll_td'>
        + 90hours<br/>
        <Overtime/>
    
       
     
      </td>
      <td className='payroll_td'>
      <Bonus/>
      <Commision/>
      + Other Earnings
      </td>
      <td className='payroll_td'>
        $700K
      </td>
    </tr>
    <tr className="content_row">
      <th scope="row">6</th>
      <td className='payroll_td'>
        Nasiru Iyidemilade<br/>
        $100/per hour

      </td>
      <td className='payroll_td'>
        + 90hours<br/>
        <Overtime/>
    
       
     
      </td>
      <td className='payroll_td'>
      <Bonus/>
      <Commision/>
      + Other Earnings
      </td>
      <td className='payroll_td'>
        $700K
      </td>
    </tr>
  </tbody>
</table>
    </div>
   
    </div>
  )
}

export default Payroll




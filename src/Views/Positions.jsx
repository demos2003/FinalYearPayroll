import React from "react";
import './App.css';
// import Header from "./Header";
import Editbtn from "../Components/Editbtn";
import LongBtn from "./Long-btn";
import Searchbar from "../Components/Searchbar";
import PositionBtn from "../Components/PositionBtn";
import './Position.css'


function Position(){
    return(
         <div>
          <h1 className="active_pagehead">POSITIONS</h1>
           {/* <Header/> */}
           <div className='table-holder table-holder3'>
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
          <PositionBtn/>
      </td>
    </tr>
    <tr>
    <th scope="row">Senior Developer</th>
      <td>300.00</td>
      <td>
      <PositionBtn/>
          </td>
    </tr>
    <tr>
    <th scope="row">Ui Designer</th>
      <td>100.00</td>
      <td> 
      <PositionBtn/>
           </td>
    </tr>
    <tr>
    <th scope="row">Ui Designer</th>
      <td>100.00</td>
      <td> 
      <PositionBtn/>
           </td>
    </tr>
    <tr>
    <th scope="row">Ui Designer</th>
      <td>100.00</td>
      <td> 
      <PositionBtn/>
           </td>
    </tr>
    <tr>
    <th scope="row">Ui Designer</th>
      <td>100.00</td>
      <td> 
      <PositionBtn/>
           </td>
    </tr>
  </tbody>
</table>
<div className="pos-longBtn">
<LongBtn/>
</div>
         </div>
         
         </div>
    );
}

export default Position;
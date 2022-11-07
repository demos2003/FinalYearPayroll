import './App.css';
import React from 'react';
// import Header from './Header.js';
import 'bootstrap/dist/css/bootstrap.css';

function LongBtn(){
    return(
      <div>
          {/* <div className="btn-group btn-group-toggle" data-toggle="buttons">
  <label className="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked> Active</input>
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off"> Radio</input>
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="option3" autocomplete="off"> Radio</input>
  </label>
</div> */}
<div className='long-btn'>
<button className='btn1 btn1b'>Previous</button>
<button className='btn2 btn1b'>1</button>
<button className='btn3 btn1b'>Next</button>
</div>
      </div>

    );
    
}

export default LongBtn;
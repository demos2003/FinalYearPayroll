import React from "react";
import Svg from "./Svg";
import Svg2 from "./Svg2";
import Popup1 from "./Popup1";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Popup2 from "./Popup2";


function PositionBtn(){
    const [buttonPopup3, setBP3] = useState(false);
    const [buttonPopup4, setBP4] = useState(false);
    return(
       <div>
            <div className='btn-flex'>
                   <a onClick={() => setBP3(true)}  className='edit-btn' ><Svg2></Svg2></a>
        <Popup1 trigger={buttonPopup3} setTrigger={setBP3}>
        <form>
            <h2>Edit Position</h2>
            <div class="form-row">
                <div class="form-group form-edit">
                  <label for="inputEmail4">Position Title</label>
                  <input type="text" class="form-control input-edit" id="inputAddress" placeholder="Position Title"></input>
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress2">Rate Per Hour</label>
                <input type="number" class="form-control" id="inputAddress2"></input>
            </div>
            <button type="submit" class="btn btn-primary save-btn" id="btn-space">Save</button>
         </form>
        </Popup1>
        <a  onClick={() => setBP4(true)} className='del-btn'><Svg></Svg></a>
    <Popup2 trigger={buttonPopup4} setTrigger={setBP4}>
      <h3>Are you sure you want to delete</h3>
      <button className="del-confirm">Yes..</button>
    </Popup2>
            </div>
       </div> 
    )
}

export default PositionBtn;
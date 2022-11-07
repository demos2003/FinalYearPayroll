import React from "react";
import Svg from "./Svg";
import Svg2 from "./Svg2";
import Popup1 from "./Popup1";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Popup2 from "./Popup2";
import {MdCancel} from "react-icons/md";

function Editbtn(){
  const [buttonPopup, setButtonPopup ] = useState(false);
  const [buttonPopup1, setBP1 ] = useState(false);


    return(
<div>
  <div className='btn-flex'>
    <a onClick={() => setButtonPopup(true)} className='edit-btn' ><Svg2 ></Svg2></a>

    <Popup1 trigger={buttonPopup} setTrigger={setButtonPopup}>
      <form>
            <h2>Edit Employee Info</h2>
        <div class="form-row">
         <div class="form-group form-edit">
              <label for="inputEmail4">FirstName</label>
              <input type="text" class="form-control input-edit" id="inputAddress" placeholder="First Name"></input>
          </div>
          <div class="form-group">
            <label for="inputPassword4">LastName</label>
            <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name"></input>
          </div>
      </div>
        <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
        </div>
        <div class="form-group">
            <label for="inputAddress2">Phone Number</label>
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
    
    <a  onClick={() => setBP1(true)} className='del-btn'><Svg></Svg></a>
    <Popup2 trigger={buttonPopup1} setTrigger={setBP1} >
      <div className="popup_content">
      <MdCancel className="cancel_icon"/>
      <h3>Are you sure you want to delete</h3>
      <button className="del-confirm">Yes..</button>
      </div>
    </Popup2>
  
  </div>
</div>
);
}

export default Editbtn;
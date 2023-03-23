
import './CSS/App.css';
import React from 'react';
import { Button,  Form } from "react-bootstrap";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Login(){
    return(
      <div className="color">
        
      <div className="form-arr">
      <h4>Admin Login</h4>
<form>
  <label>
  <div className="field-holder">
    <input type="text" name="name" placeholder="Username" className="field" />
    <div className="icon-holder"> <AiOutlineUser className="icon-pos"/> </div>
    </div>
  </label>
  <label>
  <div className="field-holder">                    
    <input type="password" name="password" placeholder="Password" className="field" />
    <div className="icon-holder"> <AiOutlineLock className="icon-pos"/></div>
    </div>
  </label>
  
  <input type="submit" value="Sign in" className="signin-btn" />
  <p>Are you an User ? <Link to="/UserLogin">User Login</Link></p>

</form>
    </div>
    </div>
    );
}

export default Login;
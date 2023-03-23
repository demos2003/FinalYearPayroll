import React from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="color">
      <div className="form-arr">
        <h4>User Login</h4>
        <form>
          <label>
            <div className="field-holder">
              <input
                type="text"
                name="name"
                placeholder="Username"
                className="field"
              />
              <div className="icon-holder">
                {" "}
                <AiOutlineUser className="icon-pos" />{" "}
              </div>
            </div>
          </label>
          <label>
            <div className="field-holder">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="field"
              />
              <div className="icon-holder">
                {" "}
                <AiOutlineLock className="icon-pos" />
              </div>
            </div>
          </label>
          <div>
            <Link to="/UserHomepage">
              <input type="submit" value="Sign in" className="signin-btn" />
            </Link>
          </div>
          <p>Are you an Admin ? <Link to="/Login">Admin Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;

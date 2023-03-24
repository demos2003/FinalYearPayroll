import React from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { employeeContext } from "../Context/Context";
import config from "../config";
import axios from "axios";

const UserLogin = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(employeeContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${config.baseURL}/auth/login/employee`, {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/UserHomepage");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };


  return (
    <div className="color">
      <div className="form-arr">
        <h4>User Login</h4>
        <form onSubmit={handleSubmit}>
          <label>
            <div className="field-holder">
              <input
                type="text"
                name="name"
                placeholder="Username"
                className="field"
                ref={userRef}
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
                ref={passwordRef}
              />
              <div className="icon-holder">
                {" "}
                <AiOutlineLock className="icon-pos" />
              </div>
            </div>
          </label>
          <div>
           
              <input type="submit" value="Sign in" className="signin-btn" />
         
          </div>
          <p>Are you an Admin ? <Link to="/Login">Admin Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;

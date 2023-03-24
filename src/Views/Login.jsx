import "./CSS/App.css";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../config";
import { useState, useEffect } from "react";
import { useContext, useRef } from "react";
import { adminContext } from "../Context/Context";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(adminContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${config.baseURL}/auth/login/admin`, {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/Dashboard");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

 
  return (
    <div className="color">
      <div className="form-arr">
        <h4 style={{textAlign:"center"}}>Admin Login</h4>
        <form onSubmit={handleSubmit}>
          <label>
            <div className="field-holder">
              <input
                type="email"
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

          <input type="submit" value="Sign in" className="signin-btn" style={{width:"100%", marginBottom:10}} />
          <p>
            Are you an User ? <Link to="/UserLogin">User Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { employeeContext } from "../../Context/Context";
import config from "../../config";
import axios from "axios";
import {IoIosArrowRoundBack} from "react-icons/io";

const UserLogin = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(employeeContext);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${config.baseURL}/auth/login/employee`, {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/staffattendance");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setErrorMessage("Invalid Email or password");
    }
  };

  return (
    <div className="Acolor">
      <div className="form-arr">
      <Link to="/">
          <button className="login_btn">
             <IoIosArrowRoundBack/>
          </button>
          </Link>
        <h4 style={{ textAlign: "center", marginBottom:20 }}>User Login</h4>
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
            <input
              type="submit"
              value="Sign in"
              className="signin-btn"
              style={{ width: "100%", marginBottom: 10 }}
            />
            {errorMessage && (
            <div
              className="error-message"
              style={{
                color: "red",

                marginBottom: "2%",
              }}
            >
              {errorMessage}
            </div>
          )}
          </div>
          <p>
            Are you an Admin ? <Link to="/Login">Admin Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;

import "../../CSS/App.css";
import React from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../config";
import { useContext, useRef } from "react";
import { adminContext } from "../../Context/Context";
import { useState } from "react";
import { BiError } from "react-icons/bi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { InfinitySpin } from "react-loader-spinner";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(adminContext);
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setIsLoading(true);
    try {
      const res = await axios.post(`${config.baseURL}/auth/login/admin`, {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/dashboard");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      // console.log(err.response.status)
      if(err.response.status === 401){
        setErrorMessage("Incorrect Email or Password");
      } else if (err.request) {
        setErrorMessage("Network Error");
      }
    
    }
  };

  return (
    <div className="Acolor">
      <div className="form-arr">
        <Link to="/">
          <button className="login_btn">
            <IoIosArrowRoundBack />
          </button>
        </Link>

        <h4 style={{ textAlign: "center", marginBottom: 20 }}>Admin Login</h4>
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
          {isLoading ? (
            <button
            type="submit"
              value="Sign in"
              className="signin-btn"
              style={{ width: "100%", marginBottom: 10, paddingRight:60 }}
            
            >
               <InfinitySpin width="80" color="white" />
            </button>
          ) : (
            <input
              type="submit"
              value="Sign in"
              className="signin-btn"
              style={{ width: "100%", marginBottom: 10 }}
            />
          )}
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
          <p>
            Are you an User ? <Link to="/UserLogin">User Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

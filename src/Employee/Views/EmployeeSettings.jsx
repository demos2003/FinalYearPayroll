import React from "react";
import "../../CSS/App.css";
import { BsTelephone, BsPerson } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { useState, useEffect } from "react";
import ProfilePic from "../Components/ProfilePic";
import config from "../../config";
import axios from "axios";

function EmployeeSettings({ employee }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userInfo, setUserInfo] = useState({
    _id: "",
    name: "",
    email: "",
    sex: "",
    position: "",
    phoneNo: "",
    // password:""
  });


  console.log(employee)
  console.log(userInfo.position)

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const [positonId, getPositionId] = useState([]);
  useEffect(() => {
    const fetchpositonData = async () => {
      const res = await axios.get(`${config.baseURL}/position`);
      getPositionId(res.data);
    };
    fetchpositonData();
  }, []);

  const [error1, setError1] = useState(false);
  const handleProfilePic = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("profilePic", file);
      const response = await axios.post(`${config.baseURL}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      alert("Profile Pic was Updated Successfully");
      setFile(null);
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Failed to Upload");
      setError(err.response.data.message);
    }
  };
  useEffect(() => {
    const getUserDetails = async () => {
      const res = await axios.get(`${config.baseURL}/employee/${employee._id}`);
      setUserInfo(res.data);
    };
    getUserDetails();
  }, [employee._id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    //update user data in API using axios.put
    axios
      .put(`${config.baseURL}/employee/${employee._id}`, userInfo)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match. Please Try Again");
      console.log(error);
    } else {
      try {
        const res = await axios.post(
          `${config.baseURL}/employee/change-password`,
          {
            id: employee._id,
            oldPassword,
            newPassword,
          }
        );
        res.data && window.location.reload();
      } catch (err) {
        setError(err);
        console.log(err, error);
      }
    }
  };

  setTimeout(function () {
    setError(false);
  }, 3000);

  return (
    <div>
     
      <div className="user-settings-content">
      <h1 style={{ marginLeft:50}}>Edit Personal Info </h1>
        <form>
          <div className="personal-information">
            <div className="user-form-item">
              <label htmlFor="id">Id</label>
              <div className="id">
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={userInfo._id}
                  disabled
                />
              </div>
            </div>
            <div className="user-form-item">
              <label htmlFor="phoneNo">Full Name</label>
              <div className="fullname">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userInfo.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="user-form-item">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
              />
            </div>
            <div className="user-form-item">
              <label htmlFor="phoneNo">Phone Number</label>
              <input
                type="text"
                id="phoneNo"
                name="phoneNo"
                value={userInfo.phoneNo}
                onChange={handleChange}
              />
            </div>
            <div className="user-form-item">
                <label htmlFor="">Position</label>
                <input
                type="text"
                id="position"
                name="position"
                value={userInfo.position.name}
                onChange={handleChange}
              />
              </div>
            <div className="user-form-item">
              <label htmlFor="sex">Sex</label>
              <select
                name="sex"
                id="sex"
                value={userInfo.sex}
                onChange={handleChange}
                disabled
              >
                <option value="selectuser">--Sex--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleUpdate}
            className="update-btn-user"
          >
            Update
          </button>
          <div className="user-settings-line2">
            <hr />
          </div>
        </form>

        <div className="upload-profile-pic">
          <div className="upload-profile-picture-header">
            <h4>Profile Picture</h4>
            <p>Please add a profile picture for identification.</p>
          </div>
          {!file ? (
            <>
              <form onSubmit={handleProfilePic} className="form">
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileChange}
                />
              </form>
              <ProfilePic employee={employee} />
            </>
          ) : (
            <>
              <p>Selected file: {file.name}</p>
              <button className="remove-file Create" onClick={handleRemoveFile}>
                Remove File
              </button>
              {error1 && <p className="error">{error1}</p>}
            </>
          )}
          <button className="addFile" onClick={handleProfilePic}>
            Add Profile Pic
          </button>
          <div className="user-settings-line3">
            <hr />
          </div>
        </div>

        <div className="user-change-password">
          <div className="change-password-header">
            <h4>Change Password</h4>
            <p>
              Please input your previous password before you can change to a new
              password
            </p>
          </div>
          <form>
            <div className="change-password">
              <div className="user-form-item">
                <label htmlFor="previous-password">Previous Password</label>
                <input
                  type="password"
                  id="previous-password"
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <div className="user-form-item">
                <label htmlFor="new-password">New Password</label>
                <input
                  type="password"
                  id="new-password"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="user-form-item">
                <label htmlFor="confirm-new-password">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirm-new-password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="password-do-not-match" style={{ color: "red" }}>
              {error}
            </div>
            <button onClick={handleSubmit} className="confirmPass">Confirm Password</button>
          </form>
          <div className="user-settings-line3">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeSettings;

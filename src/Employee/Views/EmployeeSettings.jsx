import React from "react";
import "../../CSS/App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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
  });

  const [error2, setError2] = useState("");
  const [setDisabled, setIsDisabled] = useState(true);

  // console.log(employee._id);

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
      const response = await axios.post(
        `${config.baseURL}/employee/${employee._id}/profilePic`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
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

  const handleEditChange = (event) => {
    handleChange(event);
    setIsDisabled(event.target.value === "");
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
        setError2("Please Fill all Fields");
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
    <div style={{ marginTop: 50, backgroundColor: "whitesmoke" }}>
      <div className="user-settings-content">
        <h4 style={{ marginLeft: 50 }}>Edit Personal Info </h4>
        <form>
          <div className="personal-information">
            <div className="user-form-item">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "40ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="outlined-required"
                    label="Employee ID"
                    value={userInfo._id}
                    disabled
                  />
                </div>
              </Box>
            </div>
            <div className="user-form-item">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "40ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    name="name"
                    id="outlined-required"
                    label="Employee Name"
                    value={userInfo.name}
                    onChange={handleEditChange}
                    required
                  />
                </div>
              </Box>
            </div>
            <div className="user-form-item">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "40ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="outlined-required"
                    label="Employee Email"
                    value={userInfo.email}
                    onChange={handleEditChange}
                    name="email"
                  />
                </div>
              </Box>
            </div>
            <div className="user-form-item">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "40ch" },
                }}
                noValidate
                autoComplete="off"
                aria-readonly="false"
              >
                <div>
                  <TextField
                    id="outlined-required"
                    label="Employee Phone Number"
                    value={userInfo.phoneNo}
                    onChange={handleEditChange}
                    name="phoneNo"
                  />
                </div>
              </Box>
            </div>
            <div className="user-form-item">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "40ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="outlined-required"
                    label="EmployeePosition"
                    value={userInfo.position ? userInfo.position.name : ""}
                    onChange={handleChange}
                    disabled
                  />
                </div>
              </Box>
            </div>
            <div className="user-form-item">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "40ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="outlined-required"
                    label="Employee Gender"
                    value={userInfo.sex}
                    onChange={handleChange}
                    disabled
                  />
                </div>
              </Box>
            </div>
          </div>
          <button
            type="submit"
            disabled={setDisabled}
            onClick={handleUpdate}
            className={
              setDisabled ? "update-btn-user-disabled" : "update-btn-user"
            }
          >
            Submit
          </button>

          {error2 && (
            <div style={{ color: "red" }}>
              <p>Please leave no fields empty</p>
            </div>
          )}
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
          {file == null ? (
            <button className="addFile" onClick={handleProfilePic} disabled>
              Add Profile Pic
            </button>
          ) : (
            <button className="addFile" onClick={handleProfilePic}>
              Add Profile Pic
            </button>
          )}

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
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "40ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    type="password"
                    id="outlined-basic"
                    label="Previous Password"
                    variant="outlined"
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </Box>
              </div>
              <div className="user-form-item">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "40ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    type="password"
                    id="outlined-basic"
                    label="New Password"
                    variant="outlined"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Box>
              </div>
              <div className="user-form-item">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "40ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    type="password"
                    id="outlined-basic"
                    label=" Confirm New Password"
                    variant="outlined"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Box>
              </div>
            </div>
            <div className="password-do-not-match" style={{ color: "red" }}>
              {error}
            </div>
            <button onClick={handleSubmit} className="confirmPass">
              Confirm Password
            </button>
          </form>
          <div className="user-settings-line3">
            <hr />
          </div>
        </div>
      </div>
      <div style={{ height: 50 }}></div>
    </div>
  );
}

export default EmployeeSettings;

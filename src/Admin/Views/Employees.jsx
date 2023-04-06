import "../../CSS/App.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Editbtn from "../Components/Editbtn";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";
import Popup1 from "../Components/Popup1";
import axios from "axios";
import config from "../../config";
import EmployeesTable from "../Components/EmployeesTable";

function Employees() {
  const [buttonPopup2, setBP2] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [sex, setSex] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error2, setError2] = useState(false);
  const [faceId, setFaceId] = useState(null);

  // const [faceioInstance, setFaceioInstance] = useState(null);

  // const handleFaceIoInstance = (instance) => {
  //   setFaceioInstance(instance);
  // };

  // let faceioInstance = null

  // useEffect(() => {
  //   const faceIoScript = document.createElement("script");
  //   faceIoScript.src = "//cdn.faceio.net/fio.js";
  //   faceIoScript.async = true;
  //   faceIoScript.onload = () => faceIoScriptLoaded();
  //   document.body.appendChild(faceIoScript);

  //   return () => {
  //     document.body.removeChild(faceIoScript);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const faceIoScriptLoaded = () => {
  //   // const faceIo = window.faceIO;
  //   if (faceI0 && !faceioInstance) {
  //     faceioInstance = new faceIO('fioa5c55')
  //   }
  // };

  // const faceRegistration = async () => {
  //   try {
  //     const userInfo = await faceioInstance.enroll({
  //       locale: "auto",

  //     })
  //     console.log(userInfo)
  //     console.log('Unique Facial ID: ', userInfo.facialId)
  //     console.log('Enrollment Date: ', userInfo.timestamp)
  //     console.log('Gender: ', userInfo.details.gender)
  //     console.log('Age Approximation: ', userInfo.details.age)
  //   } catch (errorCode) {
  //     console.log(errorCode)
  //     handleError(errorCode)
  //   }
  // }

  // const faceSignIn = async () => {
  //   try {
  //     console.log(faceioInstance)
  //     const userData = await faceioInstance.authenticate({
  //       locale: "auto",
  //     })
  //     console.log(userData)

  //     console.log('Unique Facial ID: ', userData.facialId)
  //     console.log('PayLoad: ', userData.payload)
  //   } catch (errorCode) {
  //     console.log(errorCode)
  //     handleError(errorCode)
  //   }
  // }

  const [file, setFile] = useState(null);

  const handleFileChange1 = (event) => {
    setFile(event.target.files[0]);
  };

  const handleRemoveFile1 = () => {
    setFile(null);
  };

  // const [error1, setError1] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      // formData.append("profilePic", file);
      formData.append("name", name);
      formData.append("address", address);
      formData.append("sex", sex);
      formData.append("position", position);
      formData.append("password", password);
      formData.append("email", email);
      formData.append("phoneNo", phoneNo);
      // formData.append("facialId", faceId);
      const response = await axios.post(
        `${config.baseURL}/auth/register/employee`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      response.window.location.reload();
    } catch (err) {
      console.log(err);
      setError2(true);
    }
  };

  const [positonId, getPositionId] = useState([]);
  useEffect(() => {
    const fetchpositonData = async () => {
      const res = await axios.get(`${config.baseURL}/position`);
      getPositionId(res.data);
    };
    fetchpositonData();
  }, []);

  const [employee, getEmployee] = useState([]);
  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await axios.get(`${config.baseURL}/employee`);
      getEmployee(res.data);
    };
    fetchEmployee();
  }, []);

  const handleButtonClick = () => {
    document.querySelector('input[type="file"]').click();
  };

  return (
    <div>
      {/* <Header/> */}
      <div className="employeeHolder">
        <div className="table-holder">
          <Popup1
            handleSubmit={handleSubmit}
            trigger={buttonPopup2}
            setTrigger={setBP2}
          >
            <form onSubmit={handleSubmit}>
              <h2>Add Employee </h2>
              <div className="form-row">
                <div className="form-group form-edit">
                  <label htmlFor="inputEmail4">Name</label>
                  <input
                    type="text"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="First Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group form-edit">
                  <label htmlFor="inputEmail4">Address</label>
                  <input
                    type="text"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="1 magodo brooks estate, Lagos Nigeria"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group form-edit">
                  <label htmlFor="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="ladenas155@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group form-edit">
                  <label htmlFor="inputEmail4">Phone Number</label>
                  <input
                    type="text"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="08188102756"
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group form-edit">
                  <label htmlFor="inputEmail4">Password</label>
                  <input
                    type="password"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group ">
                  <label htmlFor="inputState">Gender</label>
                  <select
                    id="sex"
                    className="form-control"
                    onChange={(e) => setSex(e.target.value)}
                  >
                    <option value="selectgender">--Select a Category--</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inputState">Position</label>
                  <select
                    id="inputState"
                    className="form-control"
                    onChange={(e) => setPosition(e.target.value)}
                  >
                    <option value="selectuser">--Select a Category--</option>
                    {positonId.map((item) => (
                      <option value={item._id} key={item._id}>
                        {item.name}
                      </option>
                    ))}
                    <option>Others</option>
                  </select>
                </div>
                {/* <button onClick={faceRegistration}>Register Face</button>
                  <button className="action face-sign-in" onClick={faceSignIn}>Face Sign In</button> */}
              </div>
              <button type="submit" className="btn btn-primary save-btn">
                Save
              </button>
            </form>
          </Popup1>
          <div
            style={{ width: 990, height: 542, marginLeft: "3%" }}
            className="attendance_table-holder"
          >
            <h1 style={{ marginTop: 50 }}>EMPLOYEES</h1>
            <table className="table table-bordered tableWidth attendance_table-holder">
              <thead className="tableWidth">
                <tr className="tableWidth">
                  <th scope="col" className="columnWidth">
                    Employee ID
                  </th>
                  <th scope="col" className="columnWidth">
                    Name
                  </th>
                  <th scope="col" className="columnWidth">
                    Position
                  </th>
                  <th scope="col" className="columnWidth">
                    Controls
                  </th>
                </tr>
              </thead>
            </table>
            {employee.map((emp) => (
              <EmployeesTable emp={emp} key={emp._id} positonId={positonId} />
            ))}
            <button className="AddEmployee" onClick={() => setBP2(true)}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employees;

import React from "react";
import Svg from "../../ICONS/Svg";
import Svg2 from "../../ICONS/Svg2";
import Popup1 from "./Popup1";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Popup2 from "./Popup2";
import { MdCancel } from "react-icons/md";
import axios from "axios";
import config from "../../config";

function Editbtn({ employeeEmp, positonId }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setBP1] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [sex, setSex] = useState("");
  const [position, setPosition] = useState("");
  const [employee, setEmployee] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getEmployee = async () => {
      const res = await axios.get(`${config.baseURL}/employee/${employeeEmp}`);
      setEmployee(res.data);
      setName(res.data.name);
      setEmail(res.data.email);
      setPhoneNo(res.data.phoneNo);
      setAddress(res.data.address);
      setPassword(res.data.password);
      setSex(res.data.sex);
      setPosition(res.data.position);
    };
    getEmployee();
  }, [employeeEmp]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${config.baseURL}/employee/${employeeEmp}`);
      window.location.replace("/Dashboard");
    } catch (err) { }
  };

  const handleUpdate = async () => {
    try {
      axios.put(`${config.baseURL}/employee/${employee._id}`, {
        name,
        email,
        phoneNo,
        password,
        address,
        sex,
        position,
      });
      window.location.reload();
    } catch (err) { }
  };

  return (
    <div>
      <div className="btn-flex">
        <a onClick={() => {
          setButtonPopup(true);
          setUpdateMode(true);

        }} className="edit-btn">
          <Svg2></Svg2>
        </a>

        <Popup1 trigger={buttonPopup} setTrigger={setButtonPopup}>
          <form>
            <h2>Edit Employee Info</h2>
            <div className="form-row">
              <div className="form-group form-edit">
                <label htmlFor="inputEmail4">Name</label>
                {updateMode ? (
                  <input
                    type="text"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  <input
                    type="text"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="First Name"
                  />
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group form-edit">
                <label htmlFor="inputEmail4">Address</label>
                {updateMode ? (
                  <input
                    type="text"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="1 magodo brooks estate, Lagos Nigeria"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                ) : (
                  <input
                    type="text"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="1 magodo brooks estate, Lagos Nigeria"
                  />
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group form-edit">
                <label htmlFor="inputEmail4">Email</label>
                {updateMode ? (
                  <input
                    type="email"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="ladenas155@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                ) : (
                  <input
                    type="email"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="ladenas155@gmail.com"
                  />
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group form-edit">
                <label htmlFor="inputEmail4">Phone Number</label>
                {updateMode ? (
                  <input
                    type="text"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="08188102756"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                ) : (
                  <input
                    type="text"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="08188102756"
                  />
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group form-edit">
                <label htmlFor="inputEmail4">Password</label>
                {updateMode ? (
                  <input
                    type="password"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                ) : (
                  <input
                    type="password"
                    className="form-control input-edit"
                    id="inputAddress"
                    placeholder="Password"
                  />
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group ">
                <label htmlFor="inputState">Gender</label>
                {updateMode ? (
                  <select
                    id="sex"
                    className="form-control"
                    onChange={(e) => setSex(e.target.value)}
                    value={sex}
                  >
                    <option value="selectgender">--Select a Category--</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </select>
                ) : (
                  <select id="sex" className="form-control">
                    <option value="selectgender">--Select a Category--</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </select>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="inputState">Position</label>
                {updateMode ? (
                  <select
                    id="inputState"
                    className="form-control"
                    onChange={(e) => setPosition(e.target.value)}
                    value={position._id}
                  >
                    <option value="selectuser">--Select a Category--</option>
                    {positonId.map((item) => (
                      <option value={item._id} key={item._id}>
                        {item.name}
                      </option>
                    ))}
                    <option>Others</option>
                  </select>

                ) : (

                  <select
                    id="inputState"
                    className="form-control"

                  >
                    <option value="selectuser">--Select a Category--</option>
                    {positonId.map((item) => (
                      <option value={item._id} key={item._id}>
                        {item.name}
                      </option>
                    ))}
                    <option>Others</option>
                  </select>

                )}

              </div>
            </div>
            <button
              type="submit"
              class="btn btn-primary save-btn"
              onClick={handleUpdate}
            >
              Save
            </button>
          </form>
        </Popup1>

        <a onClick={() => setBP1(true)} className="del-btn">
          <Svg></Svg>
        </a>
        <Popup2 trigger={buttonPopup1} setTrigger={setBP1}>
          <div className="popup_content">
            <MdCancel className="cancel_icon" />
            <h3>Are you sure you want to delete</h3>
            <button className="del-confirm" onClick={handleDelete}>Yes..</button>
          </div>
        </Popup2>
      </div>
    </div>
  );
}

export default Editbtn;

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
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FaceRec from "../Components/FaceIO";
import { RotatingLines } from "react-loader-spinner";
// import RecFace from "../Components/RecFaceIO";

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
  const [faceID, setFaceID] = useState(false);

  console.log(setFaceID);

  const [file, setFile] = useState(null);

  const handleFileChange1 = (event) => {
    setFile(event.target.files[0]);
  };

  const handleRemoveFile1 = () => {
    setFile(null);
  };

  // function handleFaceData(data) {
  //   setFaceData(data);
  // }

  // const [error1, setError1] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${config.baseURL}/auth/register/employee`, {
        name,
        address,
        sex,
        position,
        email,
        phoneNo,
        password,
        // faceId
      });
      res.data && window.location.reload();
    } catch (err) {
      // setError2("Error: Please Fill all fields");
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
  const [isEmployee, setIsGetEmployee] = useState(false);
  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await axios.get(`${config.baseURL}/employee`);
      getEmployee(res.data);
      setIsGetEmployee(true);
    };
    fetchEmployee();
  }, []);

  const handleButtonClick = () => {
    document.querySelector('input[type="file"]').click();
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

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
                <div>
                  <FaceRec faceID={faceID} setFaceID={setFaceID} />
                  {/* <RecFace /> */}
                </div>
              </div>
              <button type="submit" className="btn btn-primary save-btn">
                Save
              </button>
              {/* {error2 && <div style={{ color: "red" }}>{error2}</div>} */}
            </form>
          </Popup1>
          <div
            style={{ height: 542, marginLeft: "3%", width: "95%" }}
            className="attendance_table-holder table-holder"
          >
            <h1 style={{ marginTop: 50 }}>EMPLOYEES</h1>
            <TableContainer
              component={Paper}
              style={{ marginTop: 40, marginBottom: 20, width: "100%" }}
              id="TableCont"
            >
              <Table sx={{ minWidth: 550 }} aria-label="customized table">
                <TableHead
                  style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 0,
                    backgroundColor: "white",
                  }}
                >
                  <TableRow>
                    <TableCell className="columnWidth">Employee ID</TableCell>
                    <TableCell className="columnWidth">Name</TableCell>
                    <TableCell className="columnWidth">
                      Position &nbsp;
                    </TableCell>
                    <TableCell className="columnWidth">
                      Controls &nbsp;
                    </TableCell>
                  </TableRow>
                </TableHead>
                {isEmployee ? (
                  <TableBody>
                    {employee.map((emp) => (
                      <StyledTableRow>
                        <StyledTableCell className="columnWidth">
                          {emp._id}
                        </StyledTableCell>
                        <StyledTableCell className="columnWidth">
                          {emp.name}
                        </StyledTableCell>
                        <StyledTableCell className="columnWidth">
                          {emp.position.name}
                        </StyledTableCell>
                        <StyledTableCell className="columnWidth">
                          <Editbtn
                            emp={emp}
                            employeeEmp={emp._id}
                            positonId={positonId}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                ) : (
                  <div className="loadingArea">
                  <div className="RL">
                    <RotatingLines
                      strokeColor="#7f6ad3"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="56"
                      visible={true}
                    />
                  </div>
                </div>
                )}
              </Table>
            </TableContainer>
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

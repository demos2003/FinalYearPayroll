import React, { useState, useEffect } from "react";
import "../../CSS/App.css";
import LongBtn from "../Components/Long-btn";
import PositionBtn from "../Components/PositionBtn";
import "../../CSS/Position.css";
import { PopUp3 } from "../Components/PopUp3";
import axios from "axios";
import config from "../../config";
import PositionTable from "../Components/PositionTable";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { RotatingLines } from "react-loader-spinner";

function Position() {
  const [name, setNewName] = useState("");
  const [pay, setPay] = useState("");
  const [error, setError] = useState(false);
  const [error2, setError2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${config.baseURL}/position`, {
        name,
        pay,
      });
      res.data && window.location.reload();
    } catch (err) {
      setError2("Please Fill all Fields");
    }
  };

  const [positonId, getPositionId] = useState([]);
  const [isPositionId, isGetPositionId] = useState(false);
  useEffect(() => {
    const fetchpositonData = async () => {
      const res = await axios.get(`${config.baseURL}/position`);
      getPositionId(res.data);
      isGetPositionId(true);
    };
    fetchpositonData();
  }, []);

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

  const [addPopUp, setAddPopUp] = useState(false);

  return (
    <div style={{ marginTop: 45 }}>
      <button
        className="AddEmployee2"
        onClick={() => setAddPopUp(true)}
        style={{ marginBottom: 50 }}
      >
        Add
      </button>

      <PopUp3
        trigger={addPopUp}
        setTrigger={setAddPopUp}
        handleSubmit={handleSubmit}
      >
        <form onSubmit={handleSubmit}>
          <div class="form-row">
            <div class="form-group form-edit">
              <label for="inputEmail4">Position Title</label>
              <input
                type="text"
                class="form-control input-edit"
                id="inputAddress"
                onChange={(e) => setNewName(e.target.value)}
              ></input>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group form-edit">
              <label for="inputEmail4">Rate Per Day</label>
              <input
                type="text"
                class="form-control input-edit"
                id="inputAddress"
                onChange={(e) => setPay(e.target.value)}
              ></input>
            </div>
            <button type="submit" className="btn btn-primary save-btn">
              Save
            </button>
          </div>
          {error2 && (
            <div>
              <p style={{ color: "red" }}>{error2}</p>
            </div>
          )}
        </form>
      </PopUp3>
      <div style={{ width: "95%" }} className="positionHold">
        <TableContainer
          component={Paper}
          style={{ width: "95%", marginLeft: 20, marginBottom: 40 }}
        >
          <Table sx={{ minWidth: 550 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell className="columnWidth" style={{ paddingLeft: 10 }}>
                  Position Title
                </TableCell>
                <TableCell className="columnWidth">Rate PER Hour (#)</TableCell>
                <TableCell className="columnWidth">Tools &nbsp;</TableCell>
              </TableRow>
            </TableHead>
            {isPositionId ? (
              <TableBody>
                {positonId.map((item) => (
                  <StyledTableRow>
                    <StyledTableCell className="columnWidth">
                      {item.name.toUpperCase()}
                    </StyledTableCell>
                    <StyledTableCell className="columnWidth">
                      {item.pay}
                    </StyledTableCell>
                    <StyledTableCell className="columnWidth">
                      <PositionBtn positionItem={item._id} item={item} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            ) : (
              <div className="loadingArea">
                <div className="RL">
                  <RotatingLines
                    strokeColor="#7f6ad3
                    "
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

        <div className="pos-longBtn positionTable">
          {/* <LongBtn /> */}

          <Pagination
            count={3}
            variant="outlined"
            shape="rounded"
            // color=""
          />
        </div>
      </div>
    </div>
  );
}

export default Position;

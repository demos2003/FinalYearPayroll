import React from "react";
import Editbtn from "./Editbtn";
import "../../CSS/Position.css";
import "../../CSS/Tables.css"
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const EmployeesTable = ({ emp, positonId }) => {
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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
    <div className="employeeContentRow">
      {/* <table className="table table-bordered fixed tableWidth ">
        <tbody className="">
          <tr>
            <td className="columnWidth">
              <div >{emp._id}</div>
            </td>
            <td className="columnWidth">
              <div >{emp.name}</div>
            </td>
            <td className="columnWidth">
              <div >{emp.position.name}</div>
            </td>

            <td>
              <Editbtn 
              emp={emp}
              employeeEmp={emp._id}
              positonId = {positonId}
              />
            </td>
          </tr>
        </tbody>
      </table> */}
       <StyledTableRow >
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
              <StyledTableCell className="columnWidth">{emp._id}</StyledTableCell>
              <StyledTableCell className="columnWidth">{emp.name}</StyledTableCell>
              <StyledTableCell className="columnWidth">{emp.position.name}</StyledTableCell>
              <StyledTableCell className="columnWidth">
              <Editbtn 
              emp={emp}
              employeeEmp={emp._id}
              positonId = {positonId}
              />
              </StyledTableCell>
            </StyledTableRow>

    </div>
  );
};

export default EmployeesTable;

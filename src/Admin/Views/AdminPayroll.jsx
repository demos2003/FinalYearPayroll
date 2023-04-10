import axios from "axios";
import React, { useEffect } from "react";
import Searchbar from "../Components/Searchbar";
import config from "../../config";
import { useState } from "react";
import PayrollTable from "../Components/PayrollTable";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AdminPayroll = () => {
  const [employeePay, getEmployeePay] = useState([]);
  useEffect(() => {
    const fetchPayData = async () => {
      const res = await axios.post(`${config.baseURL}/monthlypay/all`);
      getEmployeePay(res.data);
    };
    fetchPayData();
  });
  // console.log(employeePay)

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

  const empPay = employeePay.monthlyPays;

  const Loop = ({ empPay, employeePay }) => {
    console.log(employeePay);

    return (
      <div>
        {empPay.map((item) => (
          <StyledTableRow>
            <StyledTableCell className="columnWidth2">
              {item.employee.name}
            </StyledTableCell>
            <StyledTableCell className="columnWidth2">
              {item.employee._id}
            </StyledTableCell>
            <StyledTableCell className="columnWidth2">
              N{item.totalPay}
            </StyledTableCell>
          </StyledTableRow>
        ))}
        <div className="totalPay">
          <p className="totalPayText"> Total Monthly Employee Pay</p>
          <p className="TotalPayField totalPayText">
            ₦{employeePay.totalMonthlyPay}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div className="payrollTableHolder">
        <div className="headerHolder">
          <h4>Payroll</h4>

          <div className="payrollHeader">
            <button className="payslipBtn">PaySlip</button>
            <Searchbar />
          </div>
        </div>
        <div style={{ width: 900, height: 55 }}>
          <TableContainer
            component={Paper}
            style={{ marginTop: 20, marginBottom: 20 }}
            id="TableCont"
          >
            <Table sx={{ minWidth: 550 }} aria-label="customized table">
              <TableHead style={{ position: "sticky", top: 0, zIndex: 0, backgroundColor:"white" }}>
                <TableRow>
                  <TableCell className="columnWidth">Employee Name</TableCell>
                  <TableCell className="columnWidth">Employee ID</TableCell>
                  <TableCell className="columnWidth">
                    Monthly Pay &nbsp;
                  </TableCell>
                </TableRow>
              </TableHead>

              {empPay ? (
                <TableBody>
                  {empPay.map((item) => (
                    <StyledTableRow>
                      <StyledTableCell className="columnWidth2">
                        {item.employee.name}
                      </StyledTableCell>
                      <StyledTableCell className="columnWidth2">
                        {item.employee._id}
                      </StyledTableCell>
                      <StyledTableCell className="columnWidth2">
                        N{item.totalPay}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              ) : (
                <>Loading</>
              )}
            </Table>
          </TableContainer>
          <div className="totalPay">
          <p className="totalPayText"> Total Monthly Employee Pay</p>
          <p className="TotalPayField totalPayText">
            ₦{employeePay.totalMonthlyPay}
          </p>
        </div>

          <div className="pos-longBtn">{/* <LongBtn /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminPayroll;

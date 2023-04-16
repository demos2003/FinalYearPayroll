import axios from "axios";
import React, { useEffect } from "react";
import Searchbar from "../Components/Searchbar";
import config from "../../config";
import { useState, useRef } from "react";
import PayrollTable from "../Components/PayrollTable";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Popup2 from "../Components/Popup2";
import { MdCancel } from "react-icons/md";
import PdFView from "../Components/pdfViewer";
import { useReactToPrint } from "react-to-print";
import { RotatingLines } from "react-loader-spinner";
import SkeletonLoader from "../Components/SkeletonLoader";

const AdminPayroll = () => {
  const [buttonPopup2, setBP2] = useState(false);
  const [employeePay, getEmployeePay] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchPayData = async () => {
      const res = await axios.post(`${config.baseURL}/monthlypay/all`);
      getEmployeePay(res.data);
    };
    fetchPayData();
  });

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

  const componentPDF = useRef();

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "employeePay",
    onAfterPrint: () => alert("Data is saved in pdf "),
  });

  const AdditionalTextComponent = () => {
    return (
      <div style={{ display: "none" }}>
        <p>This is some additional text that will be included in the PDF.</p>
      </div>
    );
  };

  const empPay = employeePay.monthlyPays;





  return (
    <div className="">
      <div className="payrollTableHolder">
        <div className="headerHolder">
          <h4>Payroll</h4>

          <div className="payrollHeader">
            <button className="payslipBtn" onClick={generatePDF}>
              PaySlip
            </button>
            <Popup2 trigger={buttonPopup2} setTrigger={setBP2}>
              <div className="popup_content">
                <PdFView />
              </div>
            </Popup2>
            <div className="search-holder">
              <input
                id="form_phone"
                placeholder="Search"
                name="search"
                value={query}
                className="form-control search-bar"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div style={{ width: "97%", height: 55 }}>
          <div ref={componentPDF}>
            <TableContainer
              component={Paper}
              style={{ marginTop: 20, marginBottom: 20 }}
              // id="TableCont"
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
                    <TableCell className="columnWidth">Employee Name</TableCell>
                    <TableCell className="columnWidth">Employee ID</TableCell>
                    <TableCell className="columnWidth">
                      Monthly Pay &nbsp;
                    </TableCell>
                  </TableRow>
                </TableHead>

                {empPay ? (
                  <TableBody>
                    {empPay
                      .filter((item) => {
                        return query.toLowerCase() === " "
                          ? item
                          : item.employee.name.toLowerCase().includes(query);
                      })
                      .map((item) => (
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
              <AdditionalTextComponent />
            </TableContainer>
            <div className="totalPay">
              <p className="totalPayText"> Total Monthly Employee Pay</p>
              <p className="TotalPaField totalPyText">
                ₦{employeePay.totalMonthlyPay}
              </p>
            </div>
          </div>

          <div className="pos-longBtn">{/* <LongBtn /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminPayroll;

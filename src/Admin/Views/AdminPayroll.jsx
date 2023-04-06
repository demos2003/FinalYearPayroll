import axios from "axios";
import React, { useEffect } from "react";
import Searchbar from "../Components/Searchbar";
import config from "../../config";
import { useState } from "react";
import PayrollTable from "../Components/PayrollTable";
const AdminPayroll = () => {
  const [employeePay, getEmployeePay] = useState([]);
  useEffect(() => {
    const fetchPayData = async () => {
      const res = await axios.post(
        `${config.baseURL}/monthlypay/all`
      );
      getEmployeePay(res.data);
    };
    fetchPayData();
  });
  // console.log(employeePay)

  const empPay = employeePay.monthlyPays;

  const Loop = ({ empPay, employeePay }) => {
    console.log(employeePay);
    
    return (
      <div>
        {empPay.map((item) => (
          <PayrollTable item={item} />
        ))}
        <div className="totalPay"> 
         <p className="totalPayText"> Total Monthly Employee Pay</p> 
        <p className="TotalPayField totalPayText">₦{employeePay.totalMonthlyPay}</p>
        </div>
        
      </div>
    );
  };

  return (
    <div className="" >
      <div className="payrollTableHolder">
        <div className="headerHolder">
          <h4>Payroll</h4>

          <div className="payrollHeader">
            <button className="payslipBtn">PaySlip</button>
            <Searchbar />
          </div>
        </div>
        <div style={{ width: 990, height: 555 }} >
          <table className="table table-bordered tableWidth table-striped ">
            <thead className="tableWidth">
              <tr className="tableWidth">
                <th scope="col" className="columnWidth2">
                  Employee Name
                </th>
                <th scope="col" className="columnWidth2">
                  Employee ID
                </th>
                <th scope="col" className="columnWidth2">
                  Monthly Pay
                </th>
              </tr>
            </thead>
          </table>
          {empPay ? <Loop empPay={empPay} employeePay={employeePay} /> : <>Loading</>}

          <div className="pos-longBtn">{/* <LongBtn /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminPayroll;

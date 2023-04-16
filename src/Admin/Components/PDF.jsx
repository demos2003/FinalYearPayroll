import React from 'react';
import PDF2 from './PDF2';
import PdFView from "../Components/pdfViewer";
import { useReactToPrint } from "react-to-print";
import { useRef } from 'react';

function MyDocument({attendance, employee, pay}) {
  // Assign random values to the employee name, ID, and monthly pay
  console.log(attendance)
  //  console.log(attendance)

  
    // console.log(formattedDate)

  // Define styles for the table

  const AttendanceHistory = ({ item }) => {
    let lateStatus = item.late ? "Late" : "On Time";
    const dateString = item.date;
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    const statusStyle = {
      color: item.late ? "red" : "green",
    };

    // console.log(item)
    return (
      <div>
        
        <div
          className="attendanceHolderRow2"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <p className="attendanceHistory">{formattedDate}</p>
          <p className="attendanceHistory" style={statusStyle}>
            {lateStatus}
          </p>
          <p className="attendanceHistory" style={{color:"red"}} >
            {item.pay}
          </p>
        </div>
        <hr />
      </div>
    );
  };

  const componentPDF = useRef()

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle:"employeePay",

  });

  return (
    <div >
       <button className="payslipBtn" style={{width:200}} onClick={ generatePDF }>Download Payslip</button>
          <div ref={componentPDF} style={{marginTop:50, paddingLeft:10, paddingRight:10}}>
            <h4>{employee.name}'s Payslip for the month of April</h4>
            <div
          className="attendanceHolderRow2 payslipTable"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <p className="attendanceHistory">Date</p>
          <p className="attendanceHistory" >
           Status
          </p>
          <p className="attendanceHistory" style={{color:"red"}} >
           Pay per Day
          </p>
        </div>
          {attendance.map((item) => (
           <AttendanceHistory item ={item}/>
        ))} 
        <div style={{display:'flex', flexDirection:"row", justifyContent:"space-between"}}>
          <h6>Total Pay</h6>
          <h6>{pay}</h6>
          </div>
         

          </div>
          
          
       
    </div>
    
  );
}

export default MyDocument;


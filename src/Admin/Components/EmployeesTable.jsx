import React from "react";
import Editbtn from "./Editbtn";
import "../../CSS/Position.css";
import "../../CSS/Tables.css"


const EmployeesTable = ({ emp, positonId }) => {
  return (
    <div className="employeeContentRow">
      <table className="table table-bordered fixed tableWidth ">
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
      </table>
    </div>
  );
};

export default EmployeesTable;

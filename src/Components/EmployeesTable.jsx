import React from "react";
import Editbtn from "./Editbtn";
import "../Views/CSS/Position.css";

const EmployeesTable = ({ emp }) => {
  return (
    <div className="table-holder3">
      <table className="table table-bordered table-width fixed ">
        <tbody>
          <tr>
            <td>
              <div className="content-holder bold">{emp._id}</div>
            </td>
            <td>
              <div className="content-holder">{emp.name}</div>
            </td>
            <td>
              <div className="content-holder">{emp.position}</div>
            </td>

            <td>
              <Editbtn />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesTable;

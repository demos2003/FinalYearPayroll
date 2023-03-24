import React from 'react'
import "../Views/CSS/Position.css";
import LongBtn from "../Views/Long-btn";
import PositionBtn from "../Components/PositionBtn";

const PositionTable = ({item}) => {
  return (
    <div className="table-holder3">
      <table  className="table table-bordered table-width fixed ">
        <tbody>
          <tr >
            <td ><div className="content-holder bold">{item.name.toUpperCase()}</div></td>
            <td ><div className="content-holder">{item.pay}</div></td>
           
            <td >
            <div className="content-holder">
            <PositionBtn 
            positionItem={item._id}
            item={item}
            
            />
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PositionTable
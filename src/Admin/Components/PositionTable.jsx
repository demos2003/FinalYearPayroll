import React from 'react'
import "../../CSS/Position.css";
// import LongBtn from "./Long-btn";
import PositionBtn from "./PositionBtn";

const PositionTable = ({item}) => {
  return (
    <div className="">
      <table  className="table table-bordered tableWidth fixed positionTable  ">
        <tbody>
          <tr >
            <td className="columnWidth2"><div >{item.name.toUpperCase()}</div></td>
            <td className="columnWidth2"><div >{item.pay}</div></td>
           
            <td >
            <div className="content-holder ">
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
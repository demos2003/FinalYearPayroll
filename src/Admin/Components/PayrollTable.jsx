import React from 'react'

const PayrollTable = ({item}) => {
  return (
    <div className="employeeContentRow">
    <table className="table table-bordered fixed tableWidth ">
      <tbody className="">
        <tr>
          <td className="columnWidth">
            <div >{item.employee.name}</div>
          </td>
          <td className="columnWidth">
            <div >{item.employee._id}</div>
          </td>
          <td className="columnWidth">
            <div >₦{item.totalPay}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  )
}

export default PayrollTable
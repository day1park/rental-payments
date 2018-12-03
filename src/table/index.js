import React from "react";
import "./table.css";

const Table = ({ lease }) => {
  const { id, start_date, end_date, frequency, rent, payment_day } = lease;
  return (
    <div className="Table-container">
      <table className="Table">
        <thead>
          <tr>
            <th>Lease number</th>
            <th>From</th>
            <th>To</th>
            <th>Days</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1{id}</td>
            <td>2{start_date}</td>
            <td>3{end_date}</td>
            <td>3{frequency}</td>
            <td>
              3$
              {rent}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

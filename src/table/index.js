import React from "react";
import "./table.css";

const Table = ({ lease }) => {
  const { id, start_date, end_date, frequency, rent } = lease;
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
            <td>{id}</td>
            <td>{start_date}</td>
            <td>{end_date}</td>
            <td>{frequency}</td>
            <td>${rent}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

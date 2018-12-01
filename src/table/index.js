import React from "react";
import "./table.css";

const Table = () => {
  return (
    <div className="Table-container">
      <table className="Table">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Days</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2018-01-01</td>
            <td>2019-12-31</td>
            <td>14</td>
            <td>$220</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

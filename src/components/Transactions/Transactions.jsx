import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

function Transactions() {
  return (
    <div>
      <Table
        striped
        bordered
        hover
        style={{ width: "25em", margin: "3em", padding: "1.5em" }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Deposit</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Withdrawal</td>
            <td>($15)</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Deposit</td>
            <td>$2</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Transactions;

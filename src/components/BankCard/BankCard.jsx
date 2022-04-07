import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdrawal } from "../../actions";

function BankCard({ transactionType }) {

  //Get transaction total from redux state and set dispatch
  const counter = useSelector((state) => state.transactionTotal);
  const dispatch = useDispatch();

  //Create react state for the transaction amount entered in the form
  const [transactionAmount, setTransactionAmount] = useState();

  //Create react state for the error message shown in the card footer
  const [error, setError] = useState();

  //This function performs validation checks on the user input
  //If the transactionType is a deposit, this function checks that the input is a positive number.
  //If the deposit input is not positive an error message is set to indicate so.
  //If the transactionType is a withdrawal the function checks that the counter amount is greater than the withdrawal amount.
  //If the withdrawal amount is less than the current counter, the transactionTotal in redux state, the account balance, an error message is set
  //If the withdrawal amount is a negative number an error message is set
  //If all checks pass, then the transactionAmount input is sent to the appropriate redux dispatcher to be added or subtracted from state.
  //A switch case is used based on the transactionType (Deposit, Withdrawal) to reduce the number of if statements.
  const checkTransaction = () => {
    switch (transactionType) {
      case "Deposit":
        if (transactionAmount < 0) {
          setError("Only positive numbers are allowed");
          return;
        } else {
          setError();
          dispatch(deposit(transactionAmount));
          return;
        }

      case "Withdrawal":
        if (transactionAmount > counter) {
          setError("You don't have enough funds for this transaction");
          return;
        }
        if (transactionAmount < 0) {
          setError("Only positive numbers are allowed");
          return;
        } else {
          setError();
          dispatch(withdrawal(transactionAmount));
          return;                                                   
        }
      default:
        return;
    }
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ width: "80%", margin: "2em", padding: "1.5em" }}>
              <Card.Header>{transactionType}</Card.Header>
              <Card.Body>
                <Card.Title>Enter Your {transactionType} Amount</Card.Title>
                <Card.Text>
                  <Form.Group className="mb-3" controlId="depositForm">
                    <Form.Control
                      onChange={(e) => {
                        let amount = Number(e.target.value);
                        setTransactionAmount(amount);
                      }}
                      type="number"
                      data-testid="transaction-input"
                      placeholder="$"
                    />
                  </Form.Group>
                  <Button
                    onClick={() => checkTransaction()}
                    variant="primary"
                    data-testid="transaction-button"
                  >
                    {transactionType}
                  </Button>
                </Card.Text>
              </Card.Body>
              <Card.Footer
                className="text-muted"
                data-testid="balance"
                label="account balance"
              >
                {error ? error : `Account Total: $${counter}`}
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BankCard;

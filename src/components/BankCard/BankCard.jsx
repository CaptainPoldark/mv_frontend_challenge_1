import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdrawal } from "../../actions";

function BankCard({ transactionType }) {
  const counter = useSelector((state) => state.transactionTotal);
  const dispatch = useDispatch();
  const [transactionAmount, setTransactionAmount] = useState();
  const [error, setError] = useState();

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

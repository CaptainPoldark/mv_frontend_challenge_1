import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deposit } from "../../actions";

function Deposit() {
  const counter = useSelector((state) => state.transactionTotal);
  const dispatch = useDispatch();
  const [depositAmount, setDepositAmount] = useState();
  const [error, setError] = useState();

  const checkTransaction = () => {
    if (depositAmount < 0) {
      setError("Only positive numbers are allowed");
      return;
    } else {
      setError();
      dispatch(deposit(depositAmount));
    }
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ width: "80%", margin: "2em", padding: "1.5em" }}>
              <Card.Header>Deposit</Card.Header>
              <Card.Body>
                <Card.Title>Enter your deposit amount</Card.Title>
                <Card.Text>
                  <Form.Group className="mb-3" controlId="depositForm">
                    <Form.Label></Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        let amount = Number(e.target.value);
                        setDepositAmount(amount);
                      }}
                      type="number"
                      placeholder="$"
                    />
                  </Form.Group>
                  <Button
                    onClick={() => checkTransaction()}
                    variant="primary"
                  >
                    Deposit
                  </Button>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
              {error ? error : `Account Total: $${counter}`}
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Deposit;

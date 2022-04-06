import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { withdrawal } from "../../actions";

function Withdraw() {
  const counter = useSelector((state) => state.transactionTotal);
  const dispatch = useDispatch();
  const [withdrawAmount, setWithdrawAmount] = useState();
  const [error, setError] = useState();

  const checkTransaction = () => {
    if (withdrawAmount > counter) {
      setError("You don't have enough funds for this transaction");
      return;
    } else {
      setError();
      dispatch(withdrawal(withdrawAmount));
    }
  };
  return (
    <div>
      {" "}
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ width: "80%", margin: "2em", padding: "1.5em" }}>
              <Card.Header>Withdraw</Card.Header>
              <Card.Body>
                <Card.Title>Enter your withdrawal amount</Card.Title>
                <Card.Text>
                  <Form.Group className="mb-3" controlId="depositForm">
                    <Form.Label></Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        let amount = Number(e.target.value);
                        setWithdrawAmount(amount);
                      }}
                      type="number"
                      placeholder="$"
                    />
                  </Form.Group>
                  <Button onClick={() => checkTransaction()} variant="primary">
                    Withdraw
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

export default Withdraw;

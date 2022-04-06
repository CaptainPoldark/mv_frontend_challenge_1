import React from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";

function CreateAccount() {
  return (
    <div>
      {" "}
      <Card style={{ width: "25em", margin: "3em", padding: "1.5em" }}>
        <Card.Header>Create an account</Card.Header>
        <Card.Body>
          <Card.Title>
            Enter the username and password you would like to use
          </Card.Title>
          <Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CreateAccount;

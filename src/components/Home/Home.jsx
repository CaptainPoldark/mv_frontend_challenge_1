import React from "react";
import { AiFillBank } from "react-icons/ai";
import { Container, Row, Col, Card } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ width: "80%", margin: "2em", padding: "1.5em" }}><div>
              <AiFillBank size={100} /></div>
              <Card.Body>
                <Card.Title>Welcome to the bank</Card.Title>
                <Card.Text>
                  You can deposit money, withdraw money, and view your balance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

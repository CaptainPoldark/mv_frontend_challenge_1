import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AiFillBank, AiFillGithub } from "react-icons/ai";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar variant="light" bg="light">
      <Container>
        <Navbar.Brand to="/">
          <AiFillBank size={50} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          {/*           <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
          <NavLink to="/create" className="nav-link">
            Create Account
          </NavLink>
          <NavLink to="/transactions" className="nav-link">
            Transactions
          </NavLink> */}
          <NavLink to="/withdraw" className="nav-link" data-testid="withdrawal-link">
            Withdraw
          </NavLink>
          <NavLink to="/deposit" className="nav-link" data-testid="deposit-link">
            Deposit
          </NavLink>
          <Nav.Link href="https://github.com/CaptainPoldark/mv_frontend_challenge_1" className="nav-link">
            <AiFillGithub size={30}/>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

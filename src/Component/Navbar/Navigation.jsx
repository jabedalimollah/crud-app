import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";
const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Crud App</Navbar.Brand>
          <Nav className="me-auto text-decoration-none">
            <NavLink className="mx-3 text-decoration-none navicon" to="/">
              Show
            </NavLink>
            <NavLink className="text-decoration-none navicon" to="/create_post">
              Create
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

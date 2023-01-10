import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const Style = styled.div`
  .navbar {
    background-color: #484848;
  }
  .navbar-brand {
    color: white;
    margin-left: 40px;
    margin-right: 40px;
    &: hover {
      color: black;
    }
  }
  .navbar-toggler {
    border-color: black;
  }
  a,
  .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: black;
    }
  }
`;

const Header = () => (
  <Style>
    <Navbar expand="lg" fixed="top">
      <Navbar.Brand href="/">
        <strong>
          HEALTH APP <Icon icon="fluent:doctor-28-filled" />
        </strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/doctors">DOCTORS</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/covidtests">COVID TESTS</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/trackappointments">Track Appointments</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item style={{ marginLeft: "47rem" }}>
            <Nav.Link>
              <Link to="/Cart">
                Cart <Icon icon="el:shopping-cart" />
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Style>
);
export default Header;

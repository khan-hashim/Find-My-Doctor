import React from "react";
import { connect } from "react-redux";
import { Card, Image, Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Container fluid>
      <div style={{ marginTop: "4rem" }}>
        <Card className="bg-dark text-black text-center">
          <Card.Img src="/images/homepage.jpg" rounded />
          <Card.ImgOverlay>
            <Card.Title style={{ marginTop: "30rem" }}>
              <h1>Health App</h1>
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
        <div>
          <Row style={{ padding: "50px" }}>
            <Col>
              <Image src="/images/about2.jpg" fluid rounded />
            </Col>
            <Col>
              <h1>
                <strong>Who Are We</strong>
              </h1>
              <hr
                style={{
                  color: "black",
                  backgroundColor: "black",
                  borderColor: "black",
                }}
              ></hr>
              <p style={{ padding: "40px" }}>
                We are a healthcare startup established; with technology that is
                acting as a bridge between verified doctors, trusted and leading
                laboratories and patients. Our basic purpose is to provide
                better healthcare facilities for your utmost comfort.We want to
                make healthcare trusted, reliable and convenient.
              </p>
            </Col>
          </Row>
        </div>
        <div style={{ backgroundColor: "#eeeeee" }}>
          <h1
            style={{
              textAlign: "center",
              padding: "30px",
            }}
          >
            <strong>Our Services</strong>
          </h1>
          <hr
            style={{
              color: "black",
              backgroundColor: "black",
              borderColor: "black",
            }}
          ></hr>
          <Row style={{ padding: "50px" }}>
            <Col>
              <Card
                style={{ width: "24rem", height: "24rem", marginLeft: "4rem" }}
                bg="light"
                border="dark"
                className="text-center"
              >
                <Card.Body>
                  <Card.Img variant="top" src="/images/doctor.jpg" fluid />
                  <Card.Title>Doctor's Appointment</Card.Title>
                  <Card.Text>Book a doctor's appointment</Card.Text>
                  <Link to="doctors" className="btn btn-primary btn-lg">
                    Book Now!
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: "24rem", height: "24rem", marginLeft: "2rem" }}
                bg="light"
                border="dark"
                className="text-center"
              >
                <Card.Body>
                  <Card.Img variant="top" src="/images/covidtest.jpg" fluid />
                  <Card.Title>COVID-19 Test</Card.Title>
                  <Card.Text>Book a Covid test</Card.Text>
                  <Link to="covidtests" className="btn btn-primary btn-lg">
                    Book Now!
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: "24rem", height: "24rem" }}
                bg="light"
                border="dark"
                className="text-center"
              >
                <Card.Body>
                  <Card.Img variant="top" src="/images/labtest.jpg" fluid />
                  <Card.Title>Lab Test</Card.Title>
                  <Card.Text>Book a lab test</Card.Text>
                  <Link to="labtests" className="btn btn-primary btn-lg">
                    Book Now!
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default HomePage;

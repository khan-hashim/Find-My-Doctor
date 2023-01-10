import React from "react";
import Information from "./Information";
import * as cartActions from "../redux/actions/cartActions";
import {
  Accordion,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validInformation: false,
      email: "",
      name: "",
      address: "",
      city: "",
      province: "",
      country: "",
      postal: "",
      phone: "",
      orderId: "",
      show: "",
    };
  }
  getBoolean = (val) => {
    this.setState({
      validInformation: val,
    });
  };
  getEmail = (val) => {
    this.setState({
      email: val,
    });
  };
  getName = (val) => {
    this.setState({
      name: val,
    });
  };
  getAddress = (val) => {
    this.setState({
      address: val,
    });
  };
  getCity = (val) => {
    this.setState({
      city: val,
    });
  };
  getProvince = (val) => {
    this.setState({
      province: val,
    });
  };
  getCountry = (val) => {
    this.setState({
      country: val,
    });
  };
  getPostal = (val) => {
    this.setState({
      postal: val,
    });
  };
  getPhone = (val) => {
    this.setState({
      phone: val,
    });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  submitdata = () => {
    let randomNo = Math.floor(Math.random() * 90000) + 10000;
    this.setState({
      orderId: randomNo,
      show: true,
    });
    const appointments = this.props.addeditems;
    let tempAppointments = [];
    for (let i = 0; i < appointments.length; i++) {
      const newAppointment = {
        name: appointments[i].title.slice(),
        imageURL: appointments[i].imageURL.slice(),
        price: appointments[i].price,
        quantity: appointments[i].quantity,
        date: appointments[i].date.slice(),
        time: appointments[i].time.slice(),
      };
      tempAppointments.push(newAppointment);
    }

    axios.post("/api/orders", {
      orderId: randomNo,
      name: this.state.name.slice(),
      phoneNo: this.state.phone,
      address: (
        this.state.address +
        ", " +
        this.state.city +
        ", " +
        this.state.province +
        ", " +
        this.state.country
      ).slice(),
      items: tempAppointments,
    });

    this.props.emptyCart();
  };

  render() {
    return (
      <Container>
        <div style={{ marginTop: "5rem" }}>
          <Modal show={this.state.show} onHide={this.handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>
                Your Appointment has been successfully booked!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card>
                <Card.Title>Order Summery: </Card.Title>
                <Card.Text>Name: {this.state.name}</Card.Text>
                <Card.Text>Order ID: {this.state.orderId}</Card.Text>
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <Link
                to="/"
                onClick={this.handleClose}
                className="btn btn-primary btn-lg"
              >
                Continue
              </Link>
            </Modal.Footer>
          </Modal>
          <h2>CheckoutPage</h2>
          <br />
          <Row>
            <Col xs={8}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Information</Accordion.Header>
                  <Accordion.Body>
                    <Information
                      sendBoolean={(val) => this.getBoolean(val)}
                      sendEmail={(val) => this.getEmail(val)}
                      sendName={(val) => this.getName(val)}
                      sendAddress={(val) => this.getAddress(val)}
                      sendPhone={(val) => this.getPhone(val)}
                      sendCity={(val) => this.getCity(val)}
                      sendProvince={(val) => this.getProvince(val)}
                      sendCountry={(val) => this.getCountry(val)}
                      sendPostal={(val) => this.getPostal(val)}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Payment</Accordion.Header>
                  <Accordion.Body>
                    <Button size="lg" onClick={() => this.submitdata()}>
                      Continue
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col style={{ marginLeft: "2rem" }}>
              <p style={{ color: "grey" }}>
                <strong>YOUR ORDER</strong>
              </p>
              <hr
                style={{
                  color: "black",
                  backgroundColor: "black",
                  borderColor: "black",
                }}
              ></hr>
              {this.props.addeditems.map((item) => (
                <Col key={item.id}>
                  <Card
                    style={{ width: "14rem", height: "14rem" }}
                    className="text-center"
                  >
                    <Card.Body>
                      <Row>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>Quantity: {item.quantity}</Card.Text>
                        <Card.Text>Fee: {item.price * item.quantity}</Card.Text>
                        <Card.Text> Date: {item.date}</Card.Text>
                        <Card.Text> Time: {item.time}</Card.Text>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
              <br />
              <Row>
                <Col>
                  <p>Subtotal</p>
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <strong>${this.props.total}</strong>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Taxes</p>
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <strong>$ {0.13 * this.props.total}</strong>
                </Col>
              </Row>
              <hr
                style={{
                  color: "black",
                  backgroundColor: "black",
                  borderColor: "black",
                }}
              ></hr>

              <Row>
                <Col>
                  <p>Total</p>
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <strong>${this.props.total + 0.13 * this.props.total}</strong>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    emptyCart: () => dispatch(cartActions.emptyCart()),
  };
}
function mapStateToProps(state) {
  return {
    addeditems: state.addedItems,
    total: state.total,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);

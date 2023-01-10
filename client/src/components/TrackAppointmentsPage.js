import React from "react";
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Card,
  CardGroup,
  Container,
} from "react-bootstrap";
import axios from "axios";
import CardHeader from "react-bootstrap/esm/CardHeader";
class TrackAppointmentsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: "",
      exists: "",
      order: "",
    };
  }
  handleChange = (e) => {
    this.setState({ orderId: e.target.value });
  };
  handleSubmit = () => {
    axios.get("/api/orders").then((res) => {
      let allOrders = res.data;
      let found = false;
      let orderIndex = -1;
      for (let i = 0; i < allOrders.length; i++) {
        let item = allOrders[i];
        if (item.orderId === this.state.orderId) {
          found = true;
          orderIndex = i;
        }
      }
      this.setState({
        exists: found,
        order: allOrders[orderIndex],
      });
    });
  };
  handleClick = () => {
    axios.delete(`/api/orders/${this.state.order._id}`).then((res) => {
      this.setState({ exists: "", order: "", orderId: "" });
    });
  };
  displayAppointments = () => {
    if (this.state.exists === false) {
      return <h1> No Appointment with this id</h1>;
    } else if (this.state.exists === true) {
      return (
        <div style={{ padding: "40px", textAlign: "center" }}>
          <CardGroup>
            {this.state.order.items.map((item, index) => (
              <Card
                key={item.orderId}
                style={{ width: "17rem", height: "17rem" }}
                bg="light"
                border="dark"
              >
                <CardHeader>
                  <strong>{index + 1}</strong>
                </CardHeader>
                {/* <Card.Img variant="top" src={item.imageURL} fluid rounded /> */}
                <Card.Body>
                  <Card.Text>Doctor: {item.name}</Card.Text>
                  <Card.Text>Fee: ${item.price}</Card.Text>
                  <Card.Text>Number of People: {item.quantity}</Card.Text>
                  <Card.Text> Date: {item.date}</Card.Text>
                  <Card.Text> Time: {item.time}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
          <Button
            size="lg"
            style={{ marginTop: "2rem" }}
            onClick={this.handleClick}
          >
            Cancel Appointment
          </Button>
        </div>
      );
    }
  };

  render() {
    return (
      <Container>
        <div>
          <h1 style={{ marginTop: "5rem" }}> Track your Appointments</h1>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">
                Enter Your Appointment Number
              </InputGroup.Text>
              <FormControl
                aria-label=""
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Enter 5 digit Appointment Number"
                type="text"
                value={this.state.orderId}
                onChange={(e) => this.handleChange(e)}
              />
            </InputGroup>
            <Button size="lg" onClick={() => this.handleSubmit()}>
              Track Appointment
            </Button>
          </Form>
          {this.displayAppointments()}
        </div>
      </Container>
    );
  }
}

export default TrackAppointmentsPage;

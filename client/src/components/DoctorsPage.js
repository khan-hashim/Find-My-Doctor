import React from "react";
import { Button, Card, Modal, Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import * as cartActions from "../redux/actions/cartActions";

class Doctors extends React.Component {
  state = {
    show: "",
    itemid: "",
    date: "",
    time: "",
  };
  handleChange = (e, key) => {
    this.setState({ [key]: e.target.value });
  };
  handleShow = (id) => {
    this.setState({ show: true, itemid: id });
  };
  handleClose = () => {
    this.setState({ show: false });
    this.props.addToCart(this.state.itemid, this.state.date, this.state.time);
  };
  render() {
    return (
      <Container>
        <div style={{ marginTop: "5rem", marginLeft: "4rem" }}>
          <h1> Doctors</h1>
          <Row xs={1} md={3} className="g-4">
            {this.props.items.map((item) => (
              <Col>
                <Card
                  key={item.id}
                  style={{ width: "20rem", height: "25rem" }}
                  bg="light"
                  border="dark"
                >
                  <Card.Img variant="top" src={item.imageURL} fluid rounded />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.desc}</Card.Text>
                    <Card.Text>Fee: ${item.price} per visit</Card.Text>
                    <Button
                      className="btn btn-primary btn-lg"
                      onClick={() => this.handleShow(item.id)}
                    >
                      Book Now!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Modal show={this.state.show} onHide={this.handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Book Appointment </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <input
                  type="date"
                  onChange={(e) => this.handleChange(e, "date")}
                />
                <br />
                <br />
                <input
                  type="time"
                  onChange={(e) => this.handleChange(e, "time")}
                />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={this.handleClose}
                size="lg"
                style={{ marginRight: "9rem" }}
              >
                Book Appointment
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addToCart: (id, date, time) =>
      dispatch(cartActions.addToCart(id, date, time)),
  };
}

function mapStateToProps(state) {
  return {
    items: state.items3,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Doctors);

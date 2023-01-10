import React from "react";
import { connect } from "react-redux";
import * as cartActions from "../redux/actions/cartActions";
import { Image, Container, Row, Col, Button, Card } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Style = styled.div`
  .contain {
    text-align: center;
  }
  .b1 {
    margin: 20px;
  }
  .b2 {
    margin: 15px;
  }
`;

class CartPage extends React.Component {
  handleRemove = (id) => {
    this.props.removeFromCart(id);
  };
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  handleSubQuantity = (id) => {
    this.props.subQuantity(id);
  };
  render() {
    return (
      <Container>
        <div style={{ marginTop: "5rem" }}>
          <Style>
            <div className="contain">
              <h1 style={{ fontWeight: "bold" }}>CART</h1>
              <br />
              <div style={{ backgroundColor: "#eeeeee" }}>
                <br />
                <Row>
                  <Col>
                    <strong>ITEM</strong>
                  </Col>
                  <Col>
                    <strong>Number of People</strong>
                  </Col>
                  <Col>
                    <strong>SUBTOTAL</strong>
                  </Col>
                </Row>
                <br />
              </div>
              <br />
              {this.props.addeditems.map((item) => (
                <Row key={item.id}>
                  <Col>
                    <Card style={{ width: "14rem", height: "14rem" }}>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>Fee: ${item.price}</Card.Text>
                        <Card.Text>Quantity: {item.quantity}</Card.Text>
                        <Card.Text> Date: {item.date}</Card.Text>
                        <Card.Text>Time: {item.time}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col style={{ padding: "70px 0", textAlign: "center" }}>
                    <Button
                      size="sm"
                      className="b1"
                      onClick={() => this.handleSubQuantity(item.id)}
                    >
                      -
                    </Button>
                    <strong>{item.quantity}</strong>
                    <Button
                      size="sm"
                      className="b2"
                      onClick={() => this.handleAddQuantity(item.id)}
                    >
                      +
                    </Button>
                  </Col>
                  <Col style={{ padding: "70px 0", textAlign: "center" }}>
                    <strong>${item.quantity * item.price}</strong>
                    <br />
                    <br />
                    <Button
                      variant="danger"
                      onClick={() => this.handleRemove(item.id)}
                    >
                      Delete Item
                    </Button>
                  </Col>
                </Row>
              ))}
              <br />
              <hr
                style={{
                  color: "black",
                  backgroundColor: "black",
                  borderColor: "black",
                }}
              ></hr>
              <Row>
                <Col></Col>
                <Col></Col>
                <Col>
                  <strong>TOTAL : ${this.props.total}</strong>
                </Col>
              </Row>
              <br />
              <Row>
                <Col></Col>
                <Col></Col>
                <Col>
                  <Link to="/checkout">
                    <Button size="lg">CHECK OUT</Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Style>
        </div>
      </Container>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (id) => dispatch(cartActions.removeFromCart(id)),
    addQuantity: (id) => dispatch(cartActions.addQuantity(id)),
    subQuantity: (id) => dispatch(cartActions.subQuantity(id)),
  };
}
function mapStateToProps(state) {
  return {
    addeditems: state.addedItems,
    total: state.total,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

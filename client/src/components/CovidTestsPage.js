import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as cartActions from "../redux/actions/cartActions";

class CovidTests extends React.Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };
  render() {
    return (
      <div style={{ marginTop: "5rem" }}>
        <h1> COVID-19 TESTS</h1>
        <p>Book A PCR or Rapid Antigen Test </p>
        <CardGroup>
          {this.props.items2.map((item) => (
            <Card
              key={item.id}
              style={{ width: "15rem", height: "14rem" }}
              bg="light"
              border="dark"
            >
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Card.Text>Price: ${item.price}</Card.Text>
                <Link
                  to="/bookingpage"
                  className="btn btn-primary btn-lg"
                  onClick={() => this.handleClick(item.id)}
                >
                  Book Now!
                </Link>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addToCart: (id) => dispatch(cartActions.addToCart(id)),
  };
}

function mapStateToProps(state) {
  return {
    items2: state.items2,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CovidTests);

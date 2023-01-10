// import React from "react";
// import { connect } from "react-redux";
// import { Button } from "react-bootstrap";

// class BookingPage extends React.Component {
//   state = {
//     date: "",
//     time: "",
//   };
//   handleChange = (e, key) => {
//     this.setState({ [key]: e.target.value });
//   };
//   handleSubmit = () => {
//     alert(this.state.time);
//     this.props.addDateAndTime(this.state.date, this.state.time);
//   };

//   render() {
//     return (
//       <div style={{ marginTop: "5rem" }}>
//         <h1>Book Appointment</h1>
//         <form>
//           <input type="date" onChange={(e) => this.handleChange(e, "date")} />
//           <br />
//           <br />
//           <input type="time" onChange={(e) => this.handleChange(e, "time")} />
//         </form>
//         <br />
//         <Button onClick={this.handleSubmit}>Book Now</Button>
//       </div>
//     );
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addDateAndTime: (date, time) =>
//       dispatch(cartActions.addDateAndTime(date, time)),
//   };
// }

// function mapStateToProps(state) {
//   return {};
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);

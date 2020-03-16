import React, { Component } from "react";
import { FormLabel, Input, Button } from "@material-ui/core";
import { connect } from "react-redux";

class form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      address: "",
      phone: "",
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.firstNamehandleChange = this.firstNamehandleChange.bind(this);
    this.lastNamehandleChange = this.lastNamehandleChange.bind(this);
    this.addresshandleChange = this.addresshandleChange.bind(this);
    this.emailhandleChange = this.emailhandleChange.bind(this);
    this.phonehandleChange = this.phonehandleChange.bind(this);
  }

  firstNamehandleChange(event) {
    this.setState({ first_name: event.target.value });
  }

  lastNamehandleChange(event) {
    this.setState({ last_name: event.target.value });
  }

  addresshandleChange(event) {
    this.setState({ address: event.target.value });
  }

  emailhandleChange(event) {
    this.setState({ email: event.target.value });
  }

  phonehandleChange(event) {
    this.setState({ phone: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    console.log(user);
    this.props.onAddUser(user);
    this.props.history.push("/sauce");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormLabel style={{ fontWeight: "bold" }}>
            First Name: &nbsp;
            <Input
              placeholder="First Name"
              value={this.state.first_name}
              onChange={this.firstNamehandleChange}
              inputProps={{ "aria-label": "description" }}
            />
          </FormLabel>
          <br></br>
          <br></br>
          <FormLabel style={{ fontWeight: "bold" }}>
            Last Name:&nbsp;
            <Input
              placeholder="Last Name"
              value={this.state.last_name}
              onChange={this.lastNamehandleChange}
              inputProps={{ "aria-label": "description" }}
            />
          </FormLabel>
          <br></br>
          <br></br>
          <FormLabel style={{ fontWeight: "bold" }}>
            Address: &nbsp;
            <Input
              placeholder="Address"
              value={this.state.address}
              onChange={this.addresshandleChange}
              inputProps={{ "aria-label": "description" }}
            />
          </FormLabel>
          <br></br>
          <br></br>
          <FormLabel style={{ fontWeight: "bold" }}>
            Email:
            <Input
              placeholder="Email"
              value={this.state.email}
              onChange={this.emailhandleChange}
              inputProps={{ "aria-label": "description" }}
            />
          </FormLabel>
          <br></br>
          <br></br>
          <FormLabel style={{ fontWeight: "bold" }}>
            Phone number:
            <Input
              placeholder="Phone number"
              value={this.state.phone}
              onChange={this.phonehandleChange}
              inputProps={{ "aria-label": "description" }}
            />
          </FormLabel>
          <br></br>
          <br></br>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddUser: user => dispatch({ type: "ADD_USER", payload: { user: user } })
    // onDeccrementCounter: () =>
    //   dispatch({ type: DECREMENT, payload: { value: 1 } }),
    // onAddCounter: () => dispatch({ type: "ADD", payload: { value: 5 } }),
    // onSubractCounter: () => dispatch({ type: SUBTRACT, payload: { value: 5 } }),
    // onAddCounterValue: () => dispatch({ type: ADD_VALUE }),
    // onDeleteCounterValue: id =>
    //   dispatch({ type: DELETE_VALUE, payload: { id: id } })
  };
};

export default connect(null, mapDispatchToProps)(form);

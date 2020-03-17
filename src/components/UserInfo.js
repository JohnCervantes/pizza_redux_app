import React, { Component } from "react";
import { FormLabel, Input, Button } from "@material-ui/core";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
    this.props.onAddUser(user);
    this.props.onIncrement();
    this.props.history.push("/sauce");
  }

  render() {
    return (
      <div>
        <Card
          style={{
            margin: "auto",
            padding: "10px",
            width: "40%",
            backgroundColor: "#F8F8F8"
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5">
              <p>Welcome guest!</p>
              <strong> Enter your info below:</strong>
              <hr></hr>
            </Typography>
            <br></br>
            <Typography variant="body2" color="primary">
              <form onSubmit={this.handleSubmit}>
                <FormLabel style={{ fontWeight: "bold" }}>
                  First Name: &nbsp;
                  <Input
                    placeholder="First Name"
                    value={this.state.first_name}
                    onChange={this.firstNamehandleChange}
                    inputProps={{ "aria-label": "description" }}
                    required
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
                    required
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
                    required
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
                    required
                    type="email"
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
                    required
                  />
                </FormLabel>
                <br></br>
                <br></br>

                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </form>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddUser: user => dispatch({ type: "ADD_USER", payload: { user: user } }),
    onIncrement: () => dispatch({ type: "INCREMENT_COUNTER" })
  };
};

export default connect(null, mapDispatchToProps)(form);

import React, { Component } from "react";
import { TextField, MenuItem, Button, FormLabel } from "@material-ui/core";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class sauce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sauceLevel: "",
      crustType: ""
    };
    this.saucehandleChange = this.saucehandleChange.bind(this);
    this.crustTypehandleChange = this.crustTypehandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  saucehandleChange(event) {
    this.setState({ sauceLevel: event.target.value });
  }

  crustTypehandleChange(event) {
    this.setState({ crustType: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const crustAndSauce = this.state;
    this.props.onAddIngredients(crustAndSauce);
    this.props.onIncrement();
    this.props.history.push("/toppings");
  }

  render() {
    const crustTypes = [
      {
        value: "Thin",
        label: "Thin"
      },
      {
        value: "Flatbread",
        label: "Flatbread"
      },
      {
        value: "Thick",
        label: "Thick"
      },
      {
        value: "Traditional Pan",
        label: "Traditional Pan"
      },
      {
        value: "Deep dish",
        label: "Deep dish"
      },
      {
        value: "Sicilian",
        label: "Sicilian"
      }
    ];

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
              <p>
                Welcome {this.props.user.first_name} {this.props.user.last_name}
                !
              </p>
              <strong> Select the sauce level and crust type below:</strong>
              <hr></hr>
            </Typography>
            <br></br>
            <Typography variant="body2" color="primary">
              <form onSubmit={this.handleSubmit}>
                <FormLabel style={{ fontWeight: "bold" }}>
                  Sauce level: &nbsp;
                  <TextField
                    type="number"
                    value={this.state.sauceLevel}
                    onChange={this.saucehandleChange}
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{ min: "0", max: "10", step: "1" }}
                    required
                  />
                </FormLabel>
                <br></br>
                <br></br>
                <FormLabel style={{ fontWeight: "bold" }}>
                  Please select your crust type": (Thin, Flatbread, Thick,
                  Traditional Pan, Deep dish, Sicilian) <br></br>
                  <TextField
                    id="crust type"
                    select
                    label="Select"
                    value={this.state.crustType}
                    onChange={this.crustTypehandleChange}
                    helperText="Please select the crust type"
                    required
                  >
                    {crustTypes.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <br></br>
                  <br></br>
                </FormLabel>

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

const mapStateToProps = state => {
  return { user: state.user.user };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddIngredients: sauceAndCrust =>
      dispatch({
        type: "ADD_SAUCE_AND_CRUST",
        payload: { sauceAndCrust: sauceAndCrust }
      }),
    onIncrement: () => dispatch({ type: "INCREMENT_COUNTER" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sauce);

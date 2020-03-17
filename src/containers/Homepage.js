import React, { Component } from "react";
import Form from "../components/UserInfo";
import Sauce from "../components/SauceAndCrust";
import Toppings from "../components/AdditionalToppings";
import Final from "../components/ReviewOrder";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { connect } from "react-redux";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  getSteps() {
    return [
      "Enter your info",
      "Select sauce level and crust type",
      "Add additional toppings",
      "Review your order"
    ];
  }

  render() {
    const steps = this.getSteps();
    console.log(this.props.counter);

    return (
      <div>
        <Stepper
          style={{
            width: "70%",
            margin: "auto",
            padding: "0px",
            marginBottom: "100px",
            marginTop: "50px"
          }}
          activeStep={this.props.counter}
          alternativeLabel
        >
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Router>
          <Switch>
            <Route exact path="/" render={props => <Form {...props} />} />
            <Route path="/sauce" render={props => <Sauce {...props} />} />
            <Route
              path="/toppings"
              render={props => <Toppings {...props} />}
            ></Route>
            <Route path="/final" component={Final} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter.counter
  };
};

export default connect(mapStateToProps, null)(Homepage);

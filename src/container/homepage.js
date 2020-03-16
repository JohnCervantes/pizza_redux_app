import React, { Component } from "react";
import Form from "../component/form";
import Sauce from "../component/sauce";
import Toppings from "../component/toppings";
import Final from "../component/final";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

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
          activeStep={this.state.step}
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

export default Homepage;

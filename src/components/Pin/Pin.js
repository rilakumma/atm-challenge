import React, { Component } from "react";
import "./Pin.css";
// import { Redirect } from "react-router-dom";

export default class Pin extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {
        name: "Madison Walmsley",
        pinNum: "1234",
        checking: { accNum: 1111222233334444, balance: 12345.67 },
        savings: { accNum: 5555666677778888, balance: 9876.54 }
      },
      pin: "",
      error: false
      // toDash: false
    };
  }
  getKey = input => {
    let inputs = this.state.pin;
    if (inputs.length < 4) {
      inputs += input;
    }
    this.setState({
      pin: inputs
    });
    if (input === "Clear") {
      this.clearPin();
    }
  };

  clearPin = () => {
    this.setState({
      pin: ""
    });
  };

  enterPin = () => {
    if (this.state.currentUser.pinNum === this.state.pin) {
      this.setState({
        error: false
      });
      this.props.history.push("/dash", this.state.currentUser);
    } else {
      this.setState({
        error: true
      });
    }
    this.clearPin();
  };
  render() {
    const keyPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "Clear"].map(key => {
      return (
        <button key={key} onClick={() => this.getKey(key)} className={`k-${key} key`}>
          {key}
        </button>
      );
    });
    const pinDots = this.state.pin.split("").map(el => <span>*</span>);
    return (
      <div className="pin">
        <div className="col-one">
          <h1 className="pin-title">Enter Your Pin.</h1>
          <h2 className="pin-msg">Please enter your 4-digit pin to access your account</h2>
        </div>
        <div className="pin-container">
          <div className="show-pin">{pinDots}</div>
          <div className="key-pad">{keyPad}</div>
          <div className="pin-err">{this.state.error && <p className="plsshake">Incorrect PIN, please try again.</p>}</div>

          <button onClick={() => this.enterPin()} className="key enter">
            Enter
          </button>
        </div>
      </div>
    );
  }
}

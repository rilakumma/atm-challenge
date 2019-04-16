import React, { Component } from "react";
import "./Pin.css";

export default class Pin extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: { name: "Madi", pinNum: "1234" },
      pin: "",
      error: false
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
      alert("success");
    } else {
      this.setState({
        error: true
      });
    }
    this.clearPin();
  };
  render() {
    const keyPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(key => {
      return (
        <button key={key} onClick={() => this.getKey(key)} className="key">
          {key}
        </button>
      );
    });
    const pinDots = this.state.pin.split("").map(el => <span>*</span>);
    return (
      <div className="pin-container">
        <h1>Enter your PIN</h1>
        <div className="show-pin">{pinDots}</div>
        <div className="key-pad">
          {keyPad}
          <button onClick={() => this.clearPin()} className="key clear">
            Clear
          </button>
        </div>
        <button onClick={() => this.enterPin()}>Enter</button>
        {this.state.error && (
          <div>
            <p>Incorrect PIN, please try again.</p>
          </div>
        )}
      </div>
    );
  }
}

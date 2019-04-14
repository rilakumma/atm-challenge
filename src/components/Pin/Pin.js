import React, { Component } from "react";
import "./Pin.css";

export default class Pin extends Component {
  constructor() {
    super();
    this.state = {
      current: null,
      //   keys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      pin: "",
      error: ""
    };
  }
  getKey = input => {
    let inputs = this.state.pin;
    if (inputs.length <= 4) {
      inputs = this.state.pin + input;
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
    console.log(this.state.pin);
    this.clearPin();
  };
  render() {
    const keyPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(key => {
      return (
        <button key={key} onClick={() => this.getKey(key)}>
          {key}
        </button>
      );
    });
    return (
      <div>
        <h1>Enter Pin Number here</h1>
        <div>{this.state.pin}</div>
        <div className="key-pad">
          {keyPad}
          <button onClick={() => this.clearPin()}>Clear</button>
        </div>
        <button onClick={() => this.enterPin()}>Enter</button>
      </div>
    );
  }
}

import React, { Component } from "react";
import Pin from "./components/Pin/Pin";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome Back!</h1>
        <p>Please enter your pin below:</p>
        <Pin />
      </div>
    );
  }
}

export default App;

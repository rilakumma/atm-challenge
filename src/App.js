import React, { Component } from "react";
// import Pin from "./components/Pin/Pin";
import "./App.css";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
        {/* <h1>Welcome Back!</h1>
        <Pin /> */}
      </div>
    );
  }
}

export default App;

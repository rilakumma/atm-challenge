import React, { Component } from "react";
import "./Dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Welcome back, {this.props.name}</h1>
      </div>
    );
  }
}

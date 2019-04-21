import React, { Component } from "react";
import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <div className="dash">
        <h1>Welcome back, {this.props.history.location.state.name}</h1>
        <div className="top">
          <div className="account-info">
            <p>Account Balance</p>
            <p>$1,000,000</p>
          </div>
          <div className="account-info">Withdraw</div>
          <div className="account-info">Deposit</div>
        </div>
        <hr className="line" />
        <h1>Quick Cash</h1>
        <div className="quick-cash">
          <div className="cash">$20</div>
          <div className="cash">$40</div>
          <div className="cash">$60</div>
          <div className="cash">$80</div>
        </div>
        {/* <div className="success">
          <p>Your cash is dispensing.</p>
          <p>Have a great day!</p>
        </div> */}
      </div>
    );
  }
}

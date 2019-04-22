import React, { Component } from "react";
import "./Dashboard.css";
import stacks from "../../icons/stacks.png";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      date: null,
      time: null
    };
  }
  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    let now = Date(Date.now());
    // let date = now.toString().split();
    this.setState({
      date: now
    });
  };
  render() {
    console.log(this.state.date);
    return (
      <div className="dash">
        <div className="account-info">
          <div className="icon">
            <img src={stacks} />
          </div>
          <h1>Your Account</h1>
          <h3>As of Monday April 22, 2019</h3>
          <div className="account">
            <p>Checking Account Balance</p>
            <p>${this.props.history.location.state.checking}</p>
          </div>
          <div className="account">
            <p>Savings Account Balance</p>
            <p>${this.props.history.location.state.savings}</p>
          </div>
          <button>Return Card</button>
        </div>

        <div>
          <h1>Good Morning, {this.props.history.location.state.name}</h1>
          <div>Withdraw</div>
          <div>Deposit</div>

          <h1>Quick Cash</h1>
          <div className="quick-cash">
            <div className="cash">$20</div>
            <div className="cash">$40</div>
            <div className="cash">$60</div>
            <div className="cash">$80</div>
          </div>
        </div>
      </div>
    );
  }
}

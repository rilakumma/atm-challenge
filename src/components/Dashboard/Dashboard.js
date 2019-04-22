import React, { Component } from "react";
import "./Dashboard.css";
import stacks from "../../icons/stacks.png";
import withdraw from "../../icons/withdraw.png";
import deposit from "../../icons/deposit.png";
import fast from "../../icons/zoom.png";
import morning from "../../icons/morning.png";

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
            <img src={stacks} alt="money icon" />
          </div>
          <div>
            <h1 className="account-title">Your Account</h1>
            <h3 className="current">As of Monday April 22, 2019</h3>
          </div>
          <div className="account">
            <p>Checking Account Balance</p>
            <p>${this.props.history.location.state.checking}</p>
          </div>
          <div className="account">
            <p>Savings Account Balance</p>
            <p>${this.props.history.location.state.savings}</p>
          </div>
          <button className="return">Return Card</button>
        </div>

        <div className="overview">
          <div className="greeting">
            <h1>Good Morning, {this.props.history.location.state.name}.</h1>
            <img src={morning} alt="good morning icon" />
          </div>
          <div className="top-container">
            <div className="actions">
              <p>Get Cash</p>
              <div className="icon">
                <img src={withdraw} alt="withdraw-icon" />
              </div>
            </div>
            <div className="actions">
              <p>Deposit</p>
              <div className="icon">
                <img src={deposit} alt="withdraw-icon" />
              </div>
            </div>
          </div>
          <div>
            <div className="fast-title">
              <img src={fast} alt="fast cash" />
              <span>Fast Cash</span>
            </div>
            <div className="fast-cash">
              <div className="cash">$20</div>
              <div className="cash">$40</div>
              <div className="cash">$60</div>
              <div className="cash last">$80</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./Dashboard.css";
import stacks from "../../icons/stacks.png";
import withdraw from "../../icons/withdraw.png";
import deposit from "../../icons/deposit.png";
import fast from "../../icons/zoom.png";
import morning from "../../icons/morning.png";
import afternoon from "../../icons/afternoon.png";
import evening from "../../icons/evening.png";
import flying from "../../icons/flying.png";
import sparkle from "../../icons/sparklemoney (1).png";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      date: null,
      tod: null,
      error: false,
      dispense: false
    };
  }

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    let tod = "";
    let now = new Date();
    let time = now.toTimeString();
    if (time.split(":")[0] < 12) {
      tod = "Morning";
    } else if (time.split(":")[0] >= 12 && time.split(":")[0] < 17) {
      tod = "Afternoon";
    } else {
      tod = "Evening";
    }
    this.setState({
      date: now.toDateString(),
      tod: tod
    });
  };
  toggleError = () => {
    this.setState({
      error: !this.state.error
    });
  };
  fastCash = amount => {
    if (amount === 80) {
      this.toggleError();
    } else {
      this.setState({
        dispense: true
      });
    }
  };

  formatAccNum = num => {
    let temp = num.toString().replace(/.(?=.{4})/g, "x");
    return temp.substring(temp.length - 8, temp.length - 4) + "-" + temp.substring(temp.length - 4, temp.length);
  };
  render() {
    const { checking, savings, name } = this.props.history.location.state;
    return (
      <div className="dash">
        <div className="account-info">
          <div className="acc-start">
            <div className="icon">
              <img src={stacks} alt="money icon" className="imgs" />
            </div>
            <h1 className="account-title">Your Account</h1>
            <h3 className="current">As of {this.state.date}</h3>
          </div>
          <div className="details">
            <label>Checking Account Balance</label>
            <div className="account">
              <p className="acc-num">...{this.formatAccNum(checking.accNum)}</p>
              <p className="balance">${checking.balance.toLocaleString()}</p>
            </div>
          </div>
          <div className="details">
            <label>Savings Account Balance</label>
            <div className="account">
              <p className="acc-num">...{this.formatAccNum(savings.accNum)}</p>
              <p className="balance">${savings.balance.toLocaleString()}</p>
            </div>
          </div>
          <button className="return" onClick={() => alert("Returning card...")}>
            Return Card
          </button>
        </div>

        <div className="overview">
          <div className="greeting">
            <h1>
              Good {this.state.tod}, {name}.
            </h1>
            {this.state.tod === "Morning" ? (
              <img src={morning} alt="good morning icon" />
            ) : this.state.tod === "Afternoon" ? (
              <img src={afternoon} alt="good afternoon icon" />
            ) : (
              <img src={evening} alt="good evening icon" />
            )}
          </div>
          <div className="top-container">
            <div className="actions">
              <p>Get Cash</p>
              <div className="icon" onClick={() => alert("Get Cash!")}>
                <img src={withdraw} alt="withdraw-icon" className="imgs drawal" />
              </div>
            </div>
            <div className="actions">
              <p>Deposit</p>
              <div className="icon" onClick={() => alert("Deposit Cash!")}>
                <img src={deposit} alt="withdraw-icon" className="imgs depo" />
              </div>
            </div>
          </div>
          <div>
            <div className="fast-title">
              <img src={fast} alt="fast cash" />
              <span>Fast Cash</span>
            </div>
            <div className="fast-cash">
              <div className="cash" onClick={() => this.fastCash(20)}>
                $20
              </div>
              <div className="cash" onClick={() => this.fastCash(40)}>
                $40
              </div>
              <div className="cash" onClick={() => this.fastCash(60)}>
                $60
              </div>
              <div className="cash last" onClick={() => this.fastCash(80)}>
                $80
              </div>
            </div>
          </div>
        </div>
        {this.state.error && (
          <div className="cash-error">
            <div className="content">
              <span className="x" onClick={() => this.toggleError()}>
                x
              </span>
              <img src={flying} alt="flying away" className="flying" />
              <h1 className="oops">Oops!</h1>
              <p className="message">
                There is not enough cash in the ATM to fulfill your request at this time. We apologize for the inconvenience.
              </p>
            </div>
          </div>
        )}
        {this.state.dispense && (
          <div className="success">
            <div className="disp-content">
              <h1>Remember to take your card.</h1>
              <h1>Cash is dispensing.</h1>
              <img src={sparkle} alt="dispense money icon" className="moneys" />
              <p>Have a great day!</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

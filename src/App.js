import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { login } from "./reducers";

const enhance = connect(
  null,
  { login }
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.props.login}>Login</button>
          <Link to="/profile" style={{ color: "white" }}>
            Go to profile
          </Link>
        </header>
      </div>
    );
  }
}

export default enhance(App);

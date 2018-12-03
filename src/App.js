import React, { Component } from "react";
import Routes from "./Routes";
import logo from "./logo.svg";
import classnames from "classnames";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classnames("App", "app-wrapper")}>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {Routes}
      </div>
    );
  }
}

export default App;

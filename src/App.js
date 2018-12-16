import React, { Component } from "react";
import Routes from "./Routes";
import classnames from "classnames";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={classnames("App", "app-wrapper")}>{Routes}</div>;
  }
}

export default App;

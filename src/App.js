import React, { Component } from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { fetchTeamsData } from "./modules/teams";
import Home from "./Home";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchTeamsData } = this.props;
    fetchTeamsData();
  }

  render() {
    return (
      <div className="App">
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
        <Home />
      </div>
    );
  }
}

// export default App;

// const mapStateToProps = state => ({
//   searchValue: state.searchbar.searchValue,
//   isLoading: state.http.isLoading
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTeamsData
    },
    dispatch
  );

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(App);

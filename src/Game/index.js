import React, { Component } from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { fetchGameData } from "../modules/game";

import GameDetails from "./components/GameDetails";

class Game extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const { match } = this.props;
    console.log(this.props, "props");
    fetchGameData(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <GameDetails />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameData: state.game.gameData
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchGameData
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Game);

import React, { Component } from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { fetchGameData } from "../modules/game";
import { fetchPlayersData } from "../modules/players";
import { fetchTeamsData } from "../modules/teams";

import GameHeader from "./components/GameHeader";
import GameDetails from "./components/GameDetails";

import "./game.css";

class Game extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      fetchGameData,
      fetchTeamsData,
      fetchPlayersData,
      match
    } = this.props;
    console.log(this.props, "props");
    fetchGameData(match.params.id);
    fetchPlayersData();
    fetchTeamsData();
  }

  render() {
    const { basicGameData, previousMatchup } = this.props.gameData;
    const { teams } = this.props;
    return (
      <div className="game-wrapper">
        <GameHeader basicGameData={basicGameData} teams={teams} />
        <GameDetails basicGameData={basicGameData} teams={teams} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameData: state.game.gameData,
  teams: state.teams.teamData,
  players: state.players.playerData
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchGameData,
      fetchPlayersData,
      fetchTeamsData
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Game);

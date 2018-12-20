import React, { Component } from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { fetchGameData, changeStatView } from "../modules/game";
import { fetchPlayersData } from "../modules/players";
import { fetchTeamsData } from "../modules/teams";

import GameHeader from "./components/GameHeader";
import GameDetails from "./components/GameDetails";
import DynamicGameStats from "./components/DynamicGameStats";

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
    const {
      gameData,
      previousMatchup,
      teams,
      players,
      statView,
      changeStatView
    } = this.props;
    return (
      <div className="game-wrapper">
        {gameData && teams ? (
          <div>
            <GameHeader basicGameData={gameData.basicGameData} teams={teams} />
            <GameDetails basicGameData={gameData.basicGameData} teams={teams} />
            <DynamicGameStats
              gameStats={gameData.stats}
              basicGameData={gameData.basicGameData}
              teams={teams}
              players={players}
              statView={statView}
              changeStatView={changeStatView}
              previousMatchup={previousMatchup}
            />
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameData: state.game.gameData,
  previousMatchup: state.game.previousMatchup,
  teams: state.teams.teamData,
  players: state.players.playerData,
  statView: state.game.statView
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchGameData,
      fetchPlayersData,
      fetchTeamsData,
      changeStatView
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Game);

import React, { Component } from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { fetchGameData, changeStatView } from "../modules/game";
import { fetchPlayersData } from "../modules/players";
import { fetchTeamsData } from "../modules/teams";
import { setSelectedSearchResult } from "../modules/searchbar";

import GameHeader from "./components/GameHeader";
import GameDetails from "./components/GameDetails";
import DynamicGameStats from "./components/DynamicGameStats";

import "./game.css";

class Game extends Component {
  componentDidMount() {
    const {
      fetchGameData,
      fetchTeamsData,
      fetchPlayersData,
      match
    } = this.props;

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
      changeStatView,
      setSelectedSearchResult
    } = this.props;

    return (
      <div className="game-wrapper">
        {gameData && gameData.basicGameData && teams ? (
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
              setSelectedSearchResult={setSelectedSearchResult}
            />
          </div>
        ) : (
          "We couldn't find any info on that game whoops :("
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
      changeStatView,
      setSelectedSearchResult
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Game);

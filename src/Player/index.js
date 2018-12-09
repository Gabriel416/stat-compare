import React, { Component } from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { fetchPlayersData, resetPlayerComparison } from "../modules/players";
import { fetchTeamsData } from "../modules/teams";
import "./player.css";

import Profile from "./components/Profile";

class Player extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchTeamsData, fetchPlayersData } = this.props;
    fetchPlayersData();
    fetchTeamsData();
  }

  render() {
    const {
      teams,
      playerToCompare,
      selectedSearchResut,
      resetPlayerComparison
    } = this.props;

    return (
      <div className="container-fluid">
        <Profile
          selectedSearchResut={selectedSearchResut}
          teams={teams}
          playerToCompare={playerToCompare}
          resetPlayerComparison={resetPlayerComparison}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players.playerData,
  playerToCompare: state.players.playerToCompare,
  teams: state.teams.teamData,
  selectedSearchResut: state.searchbar.selectedSearchResult
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPlayersData,
      fetchTeamsData,
      resetPlayerComparison
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Player);

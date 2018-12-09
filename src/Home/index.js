import React, { Component } from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { fetchPlayersData } from "../modules/players";
import { fetchTeamsData } from "../modules/teams";
import { fetchScoreboardData } from "../modules/scoreboard";

import Scoreboard from "./components/Scoreboard";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      fetchTeamsData,
      fetchPlayersData,
      fetchScoreboardData
    } = this.props;

    fetchPlayersData();
    fetchTeamsData();
    fetchScoreboardData();

    setInterval(() => {
      fetchScoreboardData();
    }, 20000);
  }

  render() {
    const { teams, scoreboardData, searchResults } = this.props;

    return (
      <div>
        <Scoreboard scoreboardData={scoreboardData} teams={teams} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.teams.teamData,
  scoreboardData: state.scoreboard
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPlayersData,
      fetchTeamsData,
      fetchScoreboardData
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);

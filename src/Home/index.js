import React, { Component } from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { todaysDate } from "../config";
import { fetchPlayersData } from "../modules/players";
import { fetchTeamsData } from "../modules/teams";
import {
  fetchScoreboardData,
  changeScoreboardDate
} from "../modules/scoreboard";

import Scoreboard from "./components/Scoreboard";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchTeamsData, fetchPlayersData, calendarDate } = this.props;

    fetchPlayersData();
    fetchTeamsData();
    this.getScores(calendarDate);

    setInterval(() => {
      this.getScores(calendarDate);
    }, 20000);
  }

  getScores = calendarDate => {
    todaysDate === calendarDate.humanReadable
      ? fetchScoreboardData()
      : changeScoreboardDate(calendarDate.fullDate);
  };

  render() {
    const {
      teams,
      scoreboardData,
      calendarDate,
      changeScoreboardDate
    } = this.props;

    return (
      <div>
        <Scoreboard
          scoreboardData={scoreboardData}
          teams={teams}
          calendarDate={calendarDate}
          changeScoreboardDate={changeScoreboardDate}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.teams.teamData,
  scoreboardData: state.scoreboard,
  calendarDate: state.scoreboard.calendarDate
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPlayersData,
      fetchTeamsData,
      fetchScoreboardData,
      changeScoreboardDate
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);

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
  componentDidMount() {
    const { fetchTeamsData, fetchPlayersData, calendarDate } = this.props;

    fetchPlayersData();
    fetchTeamsData();
    this.getScores(calendarDate);

    // TO TAKE INTO ACCOUNT HEROKU START UP
    // FOR PROXY SERVER IF ISNT WOKEN UP
    setTimeout(() => {
      this.getScores(calendarDate);
    }, 8000);

    // REFETCH THREE TIMES A MINUTE
    setInterval(() => {
      this.getScores(calendarDate);
    }, 20000);
  }

  getScores = calendarDate => {
    console.log("FIRED");
    todaysDate === calendarDate.humanReadable
      ? fetchScoreboardData()
      : changeScoreboardDate(calendarDate.fullDate);
  };

  render() {
    const {
      teams,
      scoreboardData,
      calendarDate,
      changeScoreboardDate,
      isLoading
    } = this.props;

    return (
      <div>
        <Scoreboard
          scoreboardData={scoreboardData}
          teams={teams}
          calendarDate={calendarDate}
          changeScoreboardDate={changeScoreboardDate}
          isLoading={isLoading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.http.isLoading,
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

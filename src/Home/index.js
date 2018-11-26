import React, { Component } from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { setSearchValue } from "../modules/searchbar";
import { getData } from "../modules/http";
import { fetchPlayersData } from "../modules/players";
import { fetchTeamsData } from "../modules/teams";
import { fetchScoreboardData } from "../modules/scoreboard";

import Searchbar from "../shared/components/Searchbar";
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
    const {
      players,
      teams,
      scoreboardData,
      isLoading,
      searchValue,
      searchResults,
      setSearchValue,
      getData
    } = this.props;

    return (
      <div>
        <Searchbar
          searchValue={searchValue}
          searchResults={searchResults}
          setSearchValue={setSearchValue}
        />
        <Scoreboard scoreboardData={scoreboardData} teams={teams} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players.playerData,
  teams: state.teams.teamData,
  scoreboardData: state.scoreboard,
  searchValue: state.searchbar.searchValue,
  searchResults: state.searchbar.searchResults,
  isLoading: state.http.isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSearchValue,
      getData,
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

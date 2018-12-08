import React, { Component } from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import {
  setSearchValue,
  setSelectedSearchResult,
  resetSearchbar
} from "../modules/searchbar";
import { getData } from "../modules/http";
import { fetchPlayersData } from "../modules/players";
import { fetchTeamsData } from "../modules/teams";
import "./player.css";

import Searchbar from "../shared/components/Searchbar";
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
      players,
      searchValue,
      searchResults,
      setSearchValue,
      setSelectedSearchResult,
      resetSearchbar,
      selectedSearchResut
    } = this.props;

    return (
      <div>
        <Searchbar
          searchValue={searchValue}
          searchResults={searchResults}
          setSearchValue={setSearchValue}
          setSelectedSearchResult={setSelectedSearchResult}
          resetSearchbar={resetSearchbar}
        />
        <Profile
          selectedSearchResut={selectedSearchResut}
          teams={teams}
          players={players}
        />
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
  selectedSearchResut: state.searchbar.selectedSearchResult,
  isLoading: state.http.isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSearchValue,
      getData,
      fetchPlayersData,
      fetchTeamsData,
      setSelectedSearchResult,
      resetSearchbar
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Player);

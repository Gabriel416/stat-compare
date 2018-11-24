import React, { Component } from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { setSearchValue } from "../modules/searchbar";
import { getData } from "../modules/http";
import { fetchPlayersData } from "../modules/players";
import { fetchTeamsData } from "../modules/teams";
import { fetchScoreboardData } from "../modules/scoreboard";

import Searchbar from "../shared/components/Searchbar";

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
  }

  render() {
    const { isLoading, searchValue, setSearchValue, getData } = this.props;

    return (
      <div>
        <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchValue: state.searchbar.searchValue,
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

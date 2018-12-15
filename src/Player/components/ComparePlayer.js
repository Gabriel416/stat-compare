import React, { Component } from "react";
import { teamStyles } from "../../config";

import SearchBar from "../../shared/components/searchbar/Searchbar";

class ComparePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerSearchisHidden: true
    };
  }

  componentDidUpdate() {
    if (this.state.playerSearchisHidden) {
      this.props.resetPlayerComparison();
    }
  }

  render() {
    const { player } = this.props;

    return (
      <div>
        <button
          className="player-comparison-button"
          style={{
            backgroundColor: `${teamStyles[player.team.urlName].primary}`,
            color: "#ffffff"
          }}
          onClick={() =>
            this.setState(prevState => ({
              playerSearchisHidden: !prevState.playerSearchisHidden
            }))
          }
        >
          Compare Player
        </button>
        <div
          className="player-compare-search-wrapper"
          style={{
            display: `${this.state.playerSearchisHidden ? "none" : "block"}`
          }}
        >
          <SearchBar
            placeholder="Search for a player to compare"
            playerCompare={true}
          />
        </div>
      </div>
    );
  }
}

export default ComparePlayer;

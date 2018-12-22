import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import {
  setSearchValue,
  setSelectedSearchResult,
  setComparedPlayer,
  resetSearchbar
} from "../../../modules/searchbar";
import classnames from "classnames";
import { teamStyles, playerHeadShot } from "../../../config";
import avatar from "../../../images/avatar.png";
import "./searchbar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursor: 0
    };
  }

  render() {
    const {
      searchValue,
      playerSearchValue,
      searchResults,
      playerSearchResults,
      setSearchValue,
      setSelectedSearchResult,
      setComparedPlayer,
      resetSearchbar,
      placeholder,
      playerCompare,
      showHome
    } = this.props;
    const { cursor } = this.state;

    const onSubmit = result => {
      playerCompare
        ? setComparedPlayer(result)
        : setSelectedSearchResult(result);
    };

    const onChange = searchValue => {
      playerCompare
        ? setSearchValue(searchValue, "player")
        : setSearchValue(searchValue);
    };

    const renderSuggestions = searchResults => {
      if (searchValue && !searchResults.length) {
        return <div className="suggestion-card">No results found</div>;
      }

      if (!searchResults) {
        return;
      }

      return searchResults.map((result, i) => {
        let suggestionContent = {};
        if (result.personId) {
          const mapObj = {
            teamId: result.teamId,
            personId: result.personId
          };
          suggestionContent.media = playerHeadShot.replace(
            /teamId|personId/gi,
            matched => mapObj[matched]
          );
          suggestionContent.name = `${result.firstName} ${result.lastName}`;
        } else {
          suggestionContent.media = teamStyles[result.urlName].logo;
          suggestionContent.name = result.fullName;
        }

        let suggestionCardClasses = classnames({
          "suggestion-card": true,
          "autocomplete-active": cursor === i
        });

        return (
          <div
            key={i}
            id={i}
            data={JSON.stringify(result)}
            className={suggestionCardClasses}
            onMouseDown={() => onSubmit(result)}
          >
            <img
              src={suggestionContent.media}
              alt="search suggestion media"
              onError={e => {
                e.target.src = avatar;
              }}
            />
            <span>{suggestionContent.name}</span>
          </div>
        );
      });
    };

    const handleKeyPresses = e => {
      const element = document.querySelector(".autocomplete-items");
      // arrow up/down button should select next/previous list element
      if (e.keyCode === 38 && cursor > 0) {
        this.setState(prevState => ({
          cursor: prevState.cursor - 1
        }));
        element.scrollTop -= 66;
      } else if (e.keyCode === 40 && cursor < searchResults.length - 1) {
        this.setState(prevState => ({
          cursor: prevState.cursor + 1
        }));
        element.scrollTop += 66;
      } else if (e.keyCode === 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
      } else {
        this.setState(() => ({
          cursor: 0
        }));
      }
    };

    return (
      <div className="searchbar-wrapper">
        {showHome && (
          <Link to="/" className="btn btn-primary">
            Home
          </Link>
        )}
        <form
          autoComplete="off"
          className="input-group"
          style={{ width: `${playerCompare ? "100%" : "90%"}` }}
        >
          <div className="searchbar-content">
            <label htmlFor="searchBar" className="hidden" />
            <input
              name="searchBar"
              type="text"
              placeholder={placeholder || "Search for team or player"}
              className="form-control"
              value={playerCompare ? playerSearchValue : searchValue}
              onChange={e => onChange(e.target.value)}
              onKeyDown={e => handleKeyPresses(e)}
              onBlur={() => resetSearchbar()}
              aria-label="search bar"
            />
            <div className="autocomplete-items">
              {renderSuggestions(
                playerCompare ? playerSearchResults : searchResults
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchValue: state.searchbar.searchValue,
  playerSearchValue: state.searchbar.playerSearchValue,
  searchResults: state.searchbar.searchResults,
  playerSearchResults: state.searchbar.playerSearchResults,
  selectedSearchResut: state.searchbar.selectedSearchResult
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSearchValue,
      setSelectedSearchResult,
      setComparedPlayer,
      resetSearchbar
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SearchBar);

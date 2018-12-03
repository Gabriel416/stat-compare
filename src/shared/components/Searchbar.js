import React, { Component } from "react";
import classnames from "classnames";
import { teamStyles, playerHeadShot } from "../../config";
import avatar from "../../images/avatar.png";
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
      searchResults,
      setSearchValue,
      setSelectedSearchResult,
      resetSearchbar
    } = this.props;
    const { cursor } = this.state;

    const renderSuggestions = () => {
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
            className={suggestionCardClasses}
            onMouseDown={() => setSelectedSearchResult(result)}
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
      // arrow up/down button should select next/previous list element
      if (e.keyCode === 38 && cursor > 0) {
        this.setState(prevState => ({
          cursor: prevState.cursor - 1
        }));
        document.querySelector(".autocomplete-items").scrollTop -= 66;
      } else if (e.keyCode === 40 && cursor < searchResults.length - 1) {
        this.setState(prevState => ({
          cursor: prevState.cursor + 1
        }));
        document.querySelector(".autocomplete-items").scrollTop += 66;
      } else if (e.keyCode === 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        let selectedIndex = document
          .querySelector(".autocomplete-active")
          .getAttribute("id");
        setSelectedSearchResult(searchResults[selectedIndex]);
      } else {
        // reset counter if any other keys are entered
        this.setState({ cursor: 0 });
      }
    };

    return (
      <div className="searchbar-wrapper">
        <form autoComplete="off" className="input-group">
          <div className="searchbar-content">
            <label htmlFor="searchBar" className="hidden" />
            <input
              name="searchBar"
              type="text"
              placeholder="Search for team or player"
              className="form-control"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onKeyDown={e => handleKeyPresses(e)}
              onBlur={() => resetSearchbar()}
              aria-label="search bar"
            />
            <div className="autocomplete-items">{renderSuggestions()}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

import React from "react";
import { teamStyles, playerHeadShot } from "../../config";
import avatar from "../../images/avatar.png";
import "./searchbar.css";

const SearchBar = ({ searchValue, searchResults, setSearchValue }) => {
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
      return (
        <div key={i} className="suggestion-card">
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
            aria-label="search bar"
          />
          <div className="autocomplete-items">{renderSuggestions()}</div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

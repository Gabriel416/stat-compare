import React from "react";

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <form className="input-group">
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
    </form>
  );
};

export default SearchBar;

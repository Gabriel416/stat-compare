import React from "react";

const SearchBar = ({ setSearchValue }) => {
  //   const onInputChange = event => {
  //     console.log(event.target.value);
  //     this.setState({ term: event.target.value });
  //   };

  //   const onFormSubmit = event => {
  //     event.preventDefault();
  //     // this.props.fetchWeather(this.state.term);
  //     this.setState({ term: "" });
  //   };

  return (
    <form className="input-group">
      <input
        type="text"
        placeholder="look up your favorite city"
        className="form-control"
        // value={this.state.term}
        onChange={e => setSearchValue(e)}
      />
      <span className="input-group-button">
        <input type="submit" className="btn btn-primary" />
      </span>
    </form>
  );
};

export default SearchBar;

import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Search extends React.Component {
  updateSearchInput(e) {
    const val = e.target.value;
    this.setState({
      searchText: val
    });
  }

  render() {
    return (
      <form
        className="pure-form"
        onSubmit={e => {
          this.props.fetchMovies(this.state.searchText);
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Type movie name ...."
          onChange={this.updateSearchInput.bind(this)}
        />
        <button type="submit" className="pure-button pure-button-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default connect(null, actions)(Search);

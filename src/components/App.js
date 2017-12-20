// import "./App.css";
import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import Search from "./Search";
import SearchResults from "./SearchResults";

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <SearchResults />
      </div>
    );
  }
}

export default connect(null, actions)(App);

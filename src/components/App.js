// import "./App.css";
import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import Search from "./Search";

class App extends Component {
  render() {
    return <Search />;
  }
}

export default connect(null, actions)(App);

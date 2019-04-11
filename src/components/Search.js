// IMPORT
import React, { Component } from "react";

// USER DATA
class Search extends Component {
  render() {

    var projectSearch = this.props.searchState.behanceData;
    console.log(projectSearch);
    return (
        <div id="methodSearch">
        <div className = "methodSearchContainer">
          <h5 className={this.props.searchState.hClass}>Hello</h5>
          <input placeholder="search"></input>
        </div>
        </div>
    );
  }
}

export default Search;

// IMPORT
import React, { Component } from "react";

// USER DATA
class Search extends Component {
  render() {
    // console.log("Search Component");
    return (
        <div className={this.props.searchState.cardClass}>
          <h5 className={this.props.searchState.hClass}>Search</h5>
        </div>
    );
  }
}

export default Search;

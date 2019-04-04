import React, { Component } from 'react';
import "./scss/main.scss";

// IMPORT AXIOS
// import axios from "axios";
// IMPORT LOCAL DATA

import behanceDataFROMJSON from "./data/behanceData";
console.log(" ");
console.log("data loaded...");
console.log(behanceDataFROMJSON);

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      </div>
    );
  }
}

export default App;

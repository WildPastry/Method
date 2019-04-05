// IMPORT REACT
import React, { Component } from "react";

// IMPORT COMPONENTS
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Designers from "./components/designers/Designers";
import DesignerProfile from "./components/designers/DesignerProfile";
import Projects from "./components/projects/Projects";

// IMPORT SASS
import "./scss/main.scss";

// IMPORT AXIOS
// import axios from "axios";

// IMPORT LOCAL DATA
import behanceDataFROMJSON from "./data/behanceData";
console.log("Data loaded...");
console.log(behanceDataFROMJSON);
console.log(" ");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "designers",
    };
    this.buttonValue = this.buttonValue.bind(this);
  }

  buttonValue(value) {
    console.log(value);
    this.setState({
      currentPage: value
    });
  }

  render() {
    var currentPage = this.state.currentPage;
    let display;

    if (currentPage === "designers") {
      display = <Designers />;
    } else if (currentPage === "projects") {
      display = <Projects  />;
    } else if (currentPage === "search") {
      display = <Search />;
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="textLightPink text-center">Main</h1>
          </div>
        </div>
        <Menu />
        {/* <Designers /> */}
        <DesignerProfile />
        {/* <Projects /> */}
        {/* <Search /> */}
        <Modal />
      </div>
    );
  }
}

export default App;

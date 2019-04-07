// IMPORT REACT
import React, { Component } from "react";

// IMPORT COMPONENTS
// import Menu from "./components/Menu";
import Modal from "./components/Modal";
// import Search from "./components/Search";
// import Designers from "./components/designers/Designers";
import DesignerProfile from "./components/designers/DesignerProfile";
// import Projects from "./components/projects/Projects";

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

	render() {

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<h1 className="textLightPink text-center">Main</h1>
					</div>
				</div>
				{/* <Menu />
				<Designers /> */}
				<DesignerProfile />
				{/* <Projects />
				<Search /> */}
				<Modal />

				<button type="button" className="btn bgLightPink" data-toggle="modal" data-target="#projectModal">Show Modal</button>

			</div>
		);
	}
}

export default App;

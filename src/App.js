// IMPORT REACT
import React, { Component } from "react";

// IMPORT COMPONENTS
// import Menu from "./components/Menu";
// import Modal from "./components/Modal";
// import Search from "./components/Search";
// import Designers from "./components/designers/Designers";
// import DesignerProfile from "./components/designers/DesignerProfile";
import Projects from "./components/projects/Projects";
// import projectStyles from "./components/projects/projectCard";

// IMPORT SASS
import "./scss/main.scss";

// IMPORT LODASH
import _ from 'lodash';

// IMPORT AXIOS
// import axios from "axios";



class App extends Component {


	render() {

		return (
			<div className="container-fluid">
				<div className= "row"><Projects/></div>
			</div>
		);
	}
}

export default App;

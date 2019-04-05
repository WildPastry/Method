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
import axios from "axios";

// IMPORT CONFIG
import configData from "./data/config.json";

// IMPORT LOCAL DATA
import behanceDataFromJSON from "./data/behanceData";
console.log("Data from JSON loaded...");
console.log(behanceDataFromJSON);
console.log(" ");

// DEFINE CONFIG
const key = configData.OAUTH;
const cors = configData.CORS;
const behance = configData.BEHANCE;
const scope = configData.SCOPE;

// DEFINE API DATA
const API = cors + behance + key + scope;

// MAIN APP
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			behanceData: [],
			users: [],
			projects: [],
			currentPage: "designers",
			light: false
		};
	}

	componentDidMount() {
		this.setState({
			behanceData: behanceDataFromJSON,
			loaded: true
		});
		for (var i = 0; i < behanceDataFromJSON.length; i++) {
			this.state.users.push(behanceDataFromJSON[i].user);
			this.state.projects.push(behanceDataFromJSON[i].projects);
		}
		console.log("Users only...");
		console.log(this.state.users);
		console.log("Projects only...");
		console.log(this.state.projects);
	}

	render() {
		var currentPage = this.state.currentPage;
		let display;

		if (currentPage === "designers") {
			display = <Designers usersState={this.state} />;
		} else if (currentPage === "designerProfile") {
			display = <DesignerProfile designerProfileState={this.state} />;
		} else if (currentPage === "projects") {
			display = <Projects projectsState={this.state} />;
		} else if (currentPage === "search") {
			display = <Search searchState={this.state} />;
		} else if (currentPage === "modal") {
			display = <Modal modalState={this.state} />;
		}

		if (this.state.loaded === false) {
			return (
				<div>
					<h1 className="textLightPink text-center">...LOADING...</h1>
				</div>
			);
		} else {
			return (
				<div className="container-fluid">
					<LiveDataClass />
					<Menu />

					{/* CURRENT PAGE*/}
					<div className="row">{display}</div>

				</div>
			);
		}
	}
}

// LIVE DATA COMPONENT
class LiveDataClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			behanceDataFromAPI: [],
			isLoaded: false
		};
	}

	componentDidMount() {
		axios
			.get(API)
			.then(res => {
				const behanceDataFromAPI = res.data;
				this.setState({
					isLoaded: true,
					behanceDataFromAPI
				});
			})
			.catch(error => {
				if (error.res) {
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log("Error", error.message);
				}
				console.log(error.config);
			});
	}

	render() {
		var dataLive = this.state.behanceDataFromAPI;
		var { isLoaded } = this.state;
		if (!isLoaded) {
			return (
				<div>
					<h1 className="textLightPink text-center">...LOADING...</h1>
				</div>
			);
		} else {
			console.log(" ");
			console.log("Live data successfully loaded");
			console.log(dataLive);

			return (
				<div>
					<p className="textLightGreen text-center">
						Live data successfully loaded
					</p>
				</div>
			);
		}
	}
}

export default App;

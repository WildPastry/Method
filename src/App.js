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

// DEFINE CONFIG
const key = configData.OAUTH;
const cors = configData.CORS;
const behance = configData.BEHANCE;
const scope = configData.SCOPE;

// DEFINE API DATA
const API = cors + behance + key + scope;

// DEFINE ELEMENTS
var htmlBody = document.getElementById("bg");

// MAIN APP
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			light: false,
			behanceData: [],
			designers: [],
			projects: [],
			currentPage: "designers",
			mainHeadingClass: "textLightPink text-center",
			headingClass: "textLight text-center",
			cardClass: "cardDesigner bgLightPink",
			pClass: "textDark",
			hClass: "textDark",
			mClass: "textLight",
			captionClass: "caption textDark"
		};
		this.changePage = this.changePage.bind(this);
		this.changeTheme = this.changeTheme.bind(this);
	}

	changePage(value) {
		this.setState({
			currentPage: value
		});
	}

	changeTheme() {
		if (this.state.light === false) {
			htmlBody.className = "bgLight";
			this.setState({
				light: true,
				mainHeadingClass: "textDarkGreen text-center",
				headingClass: "textDark text-center",
				cardClass: "cardDesigner bgDarkGreen",
				pClass: "textLight",
				hClass: "textLight",
				mClass: "textDark",
				captionClass: "caption textLight"
			});
		} else {
			htmlBody.className = "bgDark";
			this.setState({
				light: false,
				mainHeadingClass: "textLightPink text-center",
				headingClass: "textLight text-center",
				cardClass: "cardDesigner bgLightPink",
				pClass: "textDark",
				hClass: "textDark",
				mClass: "textLight",
				captionClass: "caption textDark"
			});
		}
	}

	componentDidMount() {
		this.setState({
			behanceData: behanceDataFromJSON,
			loaded: true
		});
		for (var i = 0; i < behanceDataFromJSON.length; i++) {
			this.state.designers.push(behanceDataFromJSON[i]);
			this.state.projects.push(behanceDataFromJSON[i].projects);
		}
	}

	render() {
		var currentPage = this.state.currentPage;
		let display;

		if (currentPage === "designers") {
			display = (
				<Designers designersState={this.state} changePage={this.changePage} />
			);
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
				<div id="methodLoader">
					<img
						className="methodLoaderImg"
						src={require("./icons/logo/methodCreamTrans.svg")}
						alt="Method Loader"
					/>
				</div>
			);
		} else {
			return (
				<div className={this.state.bgClass}>
					<div className="container-fluid">
						<LiveDataClass liveDataStateClass={this.state} />
						<Menu
							menuStateClass={this.state}
							changePage={this.changePage}
							changeTheme={this.changeTheme}
						/>
						<div className="row">{display}</div>
					</div>
				</div>
			);
		}
	}
}

// LIVE DATA COMPONENT
class LiveDataClass extends React.Component {

// for (var ij=0; j<12; j++){
//  console.log(i);
//  console.log(user)
//  console.log(user[i]);
// var newuser=user[i];
//  console.log(newuser);
//  var url='https://api.behance.net/v2/users/'+newuser+'/projects?client_id=';
//  console.log(url);

// }

	constructor(props) {
		super(props);
		this.state = {
			behanceDataFromAPI: [],
			designersFromAPI: [],
			projectsFromAPI: [],
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
		var { isLoaded } = this.state;
		if (!isLoaded) {
			return (
				<div id="methodLoader">
					<img
						className="methodLoaderImg"
						src={require("./icons/logo/methodCreamTrans.svg")}
						alt="Method Loader"
					/>
				</div>
			);
		} else {
			// var dataLive = this.state.behanceDataFromAPI;
			// for (var i = 0; i < dataLive.projects.length; i++) {
			// 	this.state.designersFromAPI.push(dataLive.projects[i].owners[0]);
			// 	this.state.projectsFromAPI.push(dataLive.projects[i]);
			// }
			// console.log("Live data loaded...");
			// console.log(dataLive);
			// console.log("Live designers array...");
			// console.log(this.state.designersFromAPI);
			// console.log("Live projects array...");
			// console.log(this.state.projectsFromAPI);
			return (
				<div className="row">
					<div className="col-12">
						<h4 className={this.props.liveDataStateClass.mainHeadingClass}>
							Welcome to our <span className="textDarkPink">METHOD</span>
						</h4>
					</div>
				</div>
			);
		}
	}
}

export default App;

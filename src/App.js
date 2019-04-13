import React, { Component } from "react";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Designers from "./components/designers/Designers";
import DesignerProfile from "./components/designers/DesignerProfile";
import Projects from "./components/projects/Projects";
import "./scss/main.scss";
// import axios from "axios";
// import configData from "./data/config.json";
import behanceDataFromJSON from "./data/behanceData";
console.log("Data from JSON loaded...");

// const key = configData.OAUTH;
// const cors = configData.CORS;
// const behance = configData.BEHANCE;
// const scope = configData.SCOPE;

// const API = cors + behance + key + scope;

var htmlBody = document.getElementById("bg");

class App extends Component {
	constructor(props) {
		super(props);

		// AXIOS LOOP
		// REQUEST HERE - 12 FOLLOWERS
		// SEND TO Array USERS (12)
		// LOOP OVER THE ARRAY
		// BASED ON THAT ARRAY - INDIVIDUAL REQUEST FOR ALL 10 PROJECTS - SAVE AS NEW ARRAY AS ALL (120) PROJECTS
		// ONCE WORKING - SAVE EVERYTHING AS HARD CODED DATA - EXACTLY 

		this.state = {
			loaded: false,
			light: false,
			behanceData: [],
			designers: [],
			projects: [],
			menuIcon: "menuIconPink",
			currentPage: "modal",
			currentDesigner: "",
			mainHeadingClass: "textLightPink text-center",
			headingClass: "textLight text-center",
			cardClass: "cardDesigner bgLightPink",
			projectCardClass: "bgLightPink cardProject",
			projectpClass: "textDark textBold",
			pClass: "textDark",
			hClass: "textDark textBold",
			mClass: "textLight",
			captionClass: "caption textDark"
		};
		this.changePage = this.changePage.bind(this);
		this.changePageFromMenu = this.changePageFromMenu.bind(this);
		this.changeTheme = this.changeTheme.bind(this);
	}

	changePage(value) {
		console.log("App.js");
		console.log(value);
		this.setState({
			currentPage: value["page"],
			currentDesigner: value["designer"]
		});
	}

	changePageFromMenu(value) {
		this.setState({
			currentPage: value
		});
	}

	changeTheme() {
		if (this.state.light === false) {
			htmlBody.className = "bgLight";
			this.setState({
				light: true,
				menuIcon: "menuIconGreen",
				mainHeadingClass: "textDarkGreen text-center",
				headingClass: "textDark text-center",
				cardClass: "cardDesigner bgDarkGreen",
				projectCardClass: "bgDarkGreen cardProject",
				projectpClass: "textLight textBold",
				pClass: "textLight",
				hClass: "textLight textBold",
				mClass: "textDark",
				captionClass: "caption textLight"
			});
		} else {
			htmlBody.className = "bgDark";
			this.setState({
				light: false,
				menuIcon: "menuIconPink",
				mainHeadingClass: "textLightPink text-center",
				headingClass: "textLight text-center",
				cardClass: "cardDesigner bgLightPink",
				projectCardClass: "bgLightPink cardProject",
				projectpClass: "textDark textBold",
				pClass: "textDark",
				hClass: "textDark textBold",
				mClass: "textLight",
				captionClass: "caption textDark"
			});
		}
	}

	componentDidMount() {
		console.log("mount");
		this.setState({
			behanceData: behanceDataFromJSON,
			loaded: true
		});
		for (var i = 0; i < behanceDataFromJSON.length; i++) {
			this.state.designers.push(behanceDataFromJSON[i]);
			this.state.projects.push(behanceDataFromJSON[i]);
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
			display = (
				<Projects projectsState={this.state} changePage={this.changePage} />
			);
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
						{/* <LiveDataClass
							liveDataStateClass={this.state}
							changeTheme={this.changeTheme}
							changeBodyTheme={this.changeBodyTheme}
						/> */}
						<Menu
							menuStateClass={this.state}
							changePageFromMenu={this.changePageFromMenu}
							changeTheme={this.changeTheme}
						/>

						{/* CURRENT PAGE*/}
						<div className="row">{display}</div>
					</div>
				</div>
			);
		}
	}
}

// class LiveDataClass extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			behanceDataFromAPI: [],
// 			designersFromAPI: [],
// 			projectsFromAPI: [],
// 			isLoaded: false
// 		};
// 	}

// 	componentDidMount() {
// 		axios
// 			.get(API)
// 			.then(res => {
// 				const behanceDataFromAPI = res.data;
// 				this.setState({
// 					isLoaded: true,
// 					behanceDataFromAPI
// 				});
// 			})
// 			.catch(error => {
// 				if (error.res) {
// 				} else if (error.request) {
// 					console.log(error.request);
// 				} else {
// 					console.log("Error", error.message);
// 				}
// 				console.log(error.config);
// 			});
// 	}

// 	render() {
// 		var { isLoaded } = this.state;
// 		if (!isLoaded) {
// 			return (
// 				<div id="methodLoader">
// 					<img
// 						className="methodLoader--img"
// 						src={require("./icons/logo/methodCreamTrans.svg")}
// 						alt="Method Loader"
// 					/>
// 				</div>
// 			);
// 		} else {
// 			var dataLive = this.state.behanceDataFromAPI;
// 			for (var i = 0; i < dataLive.projects.length; i++) {
// 				this.state.designersFromAPI.push(dataLive.projects[i].owners[0]);
// 				this.state.projectsFromAPI.push(dataLive.projects[i]);
// 			}
// 			console.log("Live data loaded...");
// 			console.log(dataLive);
// 			console.log("Live designers array...");
// 			console.log(this.state.designersFromAPI);
// 			console.log("Live projects array...");
// 			console.log(this.state.projectsFromAPI);
// 			return (
// 				<div>
// 					<h1
// 						className={this.props.liveDataStateClass.mainHeadingClass}
// 						onClick={this.props.changeTheme}
// 					>
// 						Method
// 					</h1>
// 				</div>
// 			);
// 		}
// 	}
// }

export default App;

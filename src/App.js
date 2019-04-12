import React, { Component } from "react";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Designers from "./components/designers/Designers";
import DesignerProfile from "./components/designers/DesignerProfile";
import Projects from "./components/projects/Projects";
import "./scss/main.scss";
import axios from "axios";
import configData from "./data/config.json";

var user = [
	"washe",
	"bogdan_aksonenko",
	"LenaLaBallena",
	"mateuszkozlowski",
	"h3l",
	"ahoyillustration",
	"mishapriem",
	"godsinlovea3ef",
	"angelinaout",
	"nfiasche89",
	"surrealcyborg",
	"AndreiPokrovskii"
];

for (var i = 0; i < user.length; i++) {
	var userName = user[i];
	// console.log(userName);
}

const key = configData.OAUTH;
const cors = configData.CORS;
const behance = configData.BEHANCE;
const scope = configData.SCOPE;

const API = cors + behance + user[0] + "/projects" + key + scope;
// const APITWO = cors + behance + user[1] + "/projects" + key + scope;

var htmlBody = document.getElementById("bg");

class App extends Component {
	constructor(props) {
		super(props);

		let usersFrom = [];
		for(var i = 0; i < user.length; i++){
			axios.get('https://cors-anywhere.herokuapp.com/https://www.behance.net/v2/users/washe?api_key=JoI9j5mk8tEfLB81PQeEMKhDSTjVNewT&per_page=12', {
				}).then(function (response) {
					let users = response.data['user'];
					usersFrom.push(users);
				}).catch(function (error) {
					console.log(error);
			});
		}

		console.log(usersFrom);
		this.state = {
			isLoaded: false,
			light: false,
			behanceData: usersFrom,
			designers: [],
			projects: [],
			menuIcon: "menuIconPink",
			currentPage: "designers",
			currentDesigner: "",
			mainHeadingClass: "textLightPink text-center",
			headingClass: "textLight text-center",
			cardClass: "cardDesigner bgLightPink",
			designerBarClass: "row designerBar bgLightPink",
			projectCardClass: "bgLightPink cardProject",
			projectpClass: "textDark textBold",
			pClass: "textDark",
			hClass: "textDark textBold",
			mClass: "textLight",
			captionClass: "caption textDark",
			designersCaptionClass: "caption textDark text-center"
		};
		this.changePage = this.changePage.bind(this);
		this.changePageFromMenu = this.changePageFromMenu.bind(this);
		this.changeTheme = this.changeTheme.bind(this);
	}

	changePage(value) {
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
				designerBarClass: "row designerBar bgDarkGreen",
				projectCardClass: "bgDarkGreen cardProject",
				projectpClass: "textLight textBold",
				pClass: "textLight",
				hClass: "textLight textBold",
				mClass: "textDark",
				designersCaptionClass: "caption textLight text-center",
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
				designerBarClass: "row designerBar bgLightPink",
				projectCardClass: "bgLightPink cardProject",
				projectpClass: "textDark textBold",
				pClass: "textDark",
				hClass: "textDark textBold",
				mClass: "textLight",
				designersCaptionClass: "caption textDark text-center",
				captionClass: "caption textDark"
			});
		}
	}

	// handleSubmit = async event => {
	// 	event.preventDefault();

	// 	// Promise is resolved and value is inside of the response const.
	// 	const response = await API.delete(`users/${this.state.id}`);

	// 	console.log(response);
	// 	console.log(response.data);
	// };
	// axios.all([
	//   axios.get(API),
	//   axios.get(APITWO)
	// ])
	// .then(axios.spread((API, APITWO) => {
	//   // do something with both responses
	// }));

	componentDidMount() {
// console.log("https://www.behance.net/v2/users/washe?api_key=JoI9j5mk8tEfLB81PQeEMKhDSTjVNewT&per_page=12")
		// axios
		// 	.get("https://www.behance.net/v2/users/washe?api_key=JoI9j5mk8tEfLB81PQeEMKhDSTjVNewT&per_page=12")
		// 	.then(res => {
		// 		const behanceData = res.data;
		// 		console.log(behanceData);
		// 		// this.setState({
		// 		// 	isLoaded: true,
		// 		// 	behanceData
		// 		// });
		// 	})

		// let usersFrom = [];
		// for(var i = 0; i < user.length; i++){

			// axios.get('https://cors-anywhere.herokuapp.com/https://www.behance.net/v2/users/washe?api_key=JoI9j5mk8tEfLB81PQeEMKhDSTjVNewT&per_page=12', {
			// 	}).then(function (response) {
			// 		let users = response.data['user'];
			// 	}).catch(function (error) {
			// 		console.log(error);
			// });

		// }
		// console.log(this.state.behanceData);

		// 	.catch(error => {
		// 		if (error.res) {
		// 		} else if (error.request) {
		// 			console.log(error.request);
		// 		} else {
		// 			console.log("Error", error.message);
		// 		}
		// 		console.log(error.config);
		// 	});
	}

	render() {
		var { isLoaded } = this.state;
		console.log(this.state.behanceData);
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
			var dataLive = this.state.behanceData;
			console.log("LIVE DATA...");
			console.log(dataLive);

			// this.state.desingers = []
			// this.state.projects = []
			// for (var i = 0; i < dataLive.projects.length; i++) {
			// 	this.state.designers.push(dataLive.projects[i].owners[0]);
			// 	this.state.projects.push(dataLive.projects[i]);
			// }
			// console.log("DESIGNERS...");
			// console.log(this.state.designers);
			// console.log("PROJECTS...");
			// console.log(this.state.projects);

			var currentPage = this.state.currentPage;
			let altDisplay;
			let display;

			if (currentPage === "designers") {
				display = (
					<Designers
						designersData={this.state.behanceData}
						designersCardClass={this.state.cardClass}
						designersHClass={this.state.hClass}
						designersCaptionClass={this.state.designersCaptionClass}
						changePage={this.changePage}
					/>
				);
			} else if (currentPage === "designerProfile") {
				display = "";
				altDisplay = (
					<DesignerProfile
						designerProfileData={this.state.behanceData}
						designerProfilePClass={this.state.pClass}
						designerProfileHClass={this.state.hClass}
						designerProfileBarClass={this.state.designerBarClass}
					/>
				);
			} else if (currentPage === "projects") {
				display = (
					<Projects
						projectsData={this.state.behanceData}
						projectsCardClass={this.state.cardClass}
						projectsHClass={this.state.hClass}
						projectsCaptionClass={this.state.captionClass}
						changePage={this.changePage}
					/>
				);
			} else if (currentPage === "search") {
				display = "";
				altDisplay = <Search searchState={this.state} />;
			} else if (currentPage === "modal") {
				display = "";
				altDisplay = <Modal modalState={this.state} />;
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
							<Menu
								menuStateIconClass={this.state.menuIcon}
								menuStateMClass={this.state.mClass}
								changePageFromMenu={this.changePageFromMenu}
								changeTheme={this.changeTheme}
							/>

							{/* CURRENT PAGE*/}
							<div className="row">{display}</div>
							<div className="altDisplay">{altDisplay}</div>
						</div>
					</div>
				);
			}
		}
	}
}

export default App;

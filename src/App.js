import React, { Component } from "react";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Designers from "./components/designers/Designers";
import DesignerProfile from "./components/designers/DesignerProfile";
import Projects from "./components/projects/Projects";
import "./scss/main.scss";
import { CSSTransitionGroup } from "react-transition-group";
// import axios from "axios";
// import configData from "./data/config.json";
import behanceDataFromJSON from "./data/behanceData";

// const key = configData.OAUTH;
// const cors = configData.CORS;
// const behance = configData.BEHANCE;
// const scope = configData.SCOPE;

// const API = cors + behance + key + scope;

var htmlBody = document.getElementById("bg");

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			light: false,
			behanceData: [],
			designers: [],
			projects: [],
			menuIcon: "menuIconPink",
			menuIconProfile: "menuIconGrey",
			currentPage: "designers",
			currentDesigner: "",
			currentProject: "",
			currentProjectName: "",
			currentProjectUserName: "",
			currentProjectViews: "",
			currentProjectAppreciations: "",
			currentProjectComments: "",
			fieldsOne: "",
			fieldsTwo: "",
			fieldsThree: "",
			mainHeadingClass: "textLightPink text-center",
			headingClass: "textLight text-center",
			cardClass: "cardDesigner bgLightPink",
			inputIconClass: "menuIconPink",
			inputTextClass: "textLight",
			projectCardClass: "bgLightPink cardProject",
			projectPClass: "textDark textBold",
			pClass: "textDark",
			pClassThin: "textDark textThin",
			pClassMargin: "textDark textMargin",
			hClass: "textDark textBold",
			mClass: "textLight",
			captionClass: "caption textDark",
			modalBody: "row bgLightPink textDark methodModal__bottom",
			modalLeftHClass: "textBold textDark methodModal__bannerLeft--text",
			modalRightHClass: "textBold textDark methodModal__bannerRight--text",
			modalClose: "closeModal textLightPink textBold",
			designerBarClass: "row designerBar bgLightPink",
			designersCaptionClass: "caption textDark text-center"
		};
		this.changePageAndDesigner = this.changePageAndDesigner.bind(this);
		this.changePageAndProject = this.changePageAndProject.bind(this);
		this.changePage = this.changePage.bind(this);
		this.changeTheme = this.changeTheme.bind(this);
	}

	changePageAndDesigner(value) {
		this.setState({
			currentPage: value["page"],
			currentDesigner: value["designer"]
		});
	}

	changePageAndProject(value) {
		this.setState({
			currentPage: value["page"],
			currentProject: value["project"],
			currentProjectName: value["projectName"],
			currentProjectUserName: value["projectUserName"],
			currentProjectViews: value["projectViews"],
			currentProjectAppreciations: value["projectAppreciations"],
			currentProjectComments: value["projectComments"],
			fieldsOne: value["fieldsOne"],
			fieldsTwo: value["fieldsTwo"],
			fieldsThree: value["fieldsThree"]
		});
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
				menuIcon: "menuIconGreen",
				menuIconProfile: "menuIconCream",
				mainHeadingClass: "textDarkGreen text-center",
				headingClass: "textDark text-center",
				cardClass: "cardDesigner bgDarkGreen",
				projectCardClass: "bgDarkGreen cardProject",
				projectPClass: "textLight textBold",
				inputIconClass: "menuIconGreen",
				inputTextClass: "textDark",
				pClass: "textLight",
				pClassThin: "textLight textThin",
				pClassMargin: "textLight textMargin",
				hClass: "textLight textBold",
				mClass: "textDark",
				captionClass: "caption textLight",
				modalBody: "row bgDarkGreen textLight methodModal__bottom",
				modalLeftHClass: "textBold textLight methodModal__bannerLeft--text",
				modalRightHClass: "textBold textLight methodModal__bannerRight--text",
				modalClose: "closeModal textLightGreen textBold",
				designerBarClass: "row designerBar bgDarkGreen",
				designersCaptionClass: "caption textLight text-center"
			});
		} else {
			htmlBody.className = "bgDark";
			this.setState({
				light: false,
				menuIcon: "menuIconPink",
				menuIconProfile: "menuIconGrey",
				mainHeadingClass: "textLightPink text-center",
				headingClass: "textLight text-center",
				cardClass: "cardDesigner bgLightPink",
				projectCardClass: "bgLightPink cardProject",
				projectPClass: "textDark textBold",
				inputIconClass: "menuIconPink",
				inputTextClass: "textLight",
				pClass: "textDark",
				pClassThin: "textDark textThin",
				pClassMargin: "textDark textMargin",
				hClass: "textDark textBold",
				mClass: "textLight",
				captionClass: "caption textDark",
				modalBody: "row bgLightPink textDark methodModal__bottom",
				modalLeftHClass: "textBold textDark methodModal__bannerLeft--text",
				modalRightHClass: "textBold textDark methodModal__bannerRight--text",
				modalClose: "closeModal textLightPink textBold",
				designerBarClass: "row designerBar bgLightPink",
				designersCaptionClass: "caption textDark text-center"
			});
		}
	}

	componentDidMount() {
		this.setState({
			behanceData: behanceDataFromJSON,
			loaded: true
		});
		console.log("Data from JSON loaded...");
	}

	render() {
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
					changePageFromDesigners={this.changePageAndDesigner}
				/>
			);
		} else if (currentPage === "designerProfile") {
			display = "";
			altDisplay = (
				<DesignerProfile
					designerProfileData={this.state}
					designerProfileIconClass={this.state.menuIconProfile}
					designerProfilePClass={this.state.pClass}
					designerProfilePClassThin={this.state.pClassThin}
					designerProfilePClassMargin={this.state.pClassMargin}
					designerProfileHClass={this.state.hClass}
					designerProfileBarClass={this.state.designerBarClass}
					changePageFromProfiles={this.changePageAndProject}
				/>
			);
		} else if (currentPage === "projects") {
			display = (
				<Projects
					projectsData={this.state.behanceData}
					projectsCardClass={this.state.projectCardClass}
					projectsHClass={this.state.hClass}
					projectsPClass={this.state.projectPClass}
					projectsCaptionClass={this.state.captionClass}
					changePageFromProjects={this.changePageAndProject}
					inputIconClass = {this.state.inputIconClass}
					inputTextClass = {this.state.inputTextClass}
				/>
			);
		} else if (currentPage === "search") {
			display = "";
			altDisplay = <Search searchState={this.state} />;
		} else if (currentPage === "modal") {
			display = "";
			altDisplay = (
				<Modal
					modalState={this.state.behanceData}
					modalLeftHClass={this.state.modalLeftHClass}
					modalRightHClass={this.state.modalRightHClass}
					modalStateCurrentProject={this.state.currentProject}
					modalStateCurrentProjectName={this.state.currentProjectName}
					modalStateCurrentProjectUserName={this.state.currentProjectUserName}
					modalStateViews={this.state.currentProjectViews}
					modalStateAppreciations={this.state.currentProjectAppreciations}
					modalStateComments={this.state.currentProjectComments}
					modalStateFieldsOne={this.state.fieldsOne}
					modalStateFieldsTwo={this.state.fieldsTwo}
					modalStateFieldsThree={this.state.fieldsThree}
					modalClose={this.state.modalClose}
					modalBody={this.state.modalBody}
					changePageFromModal={this.changePage}
				/>
			);
		}

		if (this.state.loaded === false) {
			return (
				<div id="methodLoader">
					<div className="circle" />
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
						{/* <LiveDataClass /> */}
						<CSSTransitionGroup
							transitionName="menuLoad"
							transitionAppear={true}
							transitionAppearTimeout={500}
							transitionEnter={false}
							transitionLeave={false}
						>
							<Menu
								menuStateIconClass={this.state.menuIcon}
								menuStateMClass={this.state.mClass}
								changePageFromMenu={this.changePage}
								changeTheme={this.changeTheme}
							/>
						</CSSTransitionGroup>
						{/* CURRENT PAGE*/}
						<div className="row">{display}</div>
						<div className="altDisplay">{altDisplay}</div>
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
// 				console.log("Live data loaded...");
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
// 						className="methodLoaderImg"
// 						src={require("./icons/logo/methodCreamTrans.svg")}
// 						alt="Method Loader"
// 					/>
// 				</div>
// 			);
// 		} else {
// 			return <React.Fragment />;
// 		}
// 	}
// }

export default App;

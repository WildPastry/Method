import React, { Component } from "react";

var projectDeets = 0

// USER DATA
class Modal extends Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		projectModal: this.props.ModalState['']
	// 	};
    // this.testModal = this.testModal.bind(this);
    // console.log(this.state.currentDesignerProfile);
	// }

	// modalTest() {
	// 	this.setState({
	// 		projectModal: ""
	// 	});
	// }

	render() {
		// console.log("Modal Component");
		// return <div />;
		
		console.log(this.props.modalState.behanceData);
		console.log(this.props.modalState.behanceData[projectDeets].user.username);
		console.log(this.props.modalState.behanceData[projectDeets].projects[0].name);
		console.log(this.props.modalState.behanceData[projectDeets].projects[0].stats.appreciations);
		// console.log(this.props.modalState.behanceData[0].projects[0]);
		// console.log(this.props.modalState.behanceData[0].projects[0].covers[808]);
		// console.log(this.props.modalState.behanceData[0].user.username);

		// for (var i = 0; i < this.props.modalState.behanceData.length; i++) {
		// 	// console.log(this.props.modalState.behanceData.length);
		// 	// console.log(this.props.modalState.behanceData[i].user.username);
		// 	console.log(this.props.modalState.behanceData[i].projects[0].url);

		// 	for (
		// 		var j = 0;
		// 		j < this.props.modalState.behanceData[j].projects.length;
		// 		j++
		// 	) {
		// 		// console.log(this.props.modalState.behanceData[j].projects.length);
		// 		// console.log(this.props.modalState.behanceData[j].projects[j]);
		// 	}
		// 	// console.log(this.props.modalState.behanceData[0].projects[0]);
		// }

		return (
			<div id="methodLoader">
				<div className="closeModal textLightPink textBold">
					<h1>X</h1>
				</div>
				<div className="methodModal bgDark">
					<div className="methodModal__top">
						<img className="methodModal__top--image" src={this.props.modalState.behanceData[projectDeets].projects[0].covers[808]} alt="loading...." />
					</div>
					<div className="row bgLightPink textDark methodModal__bottom">
						<div className="col-7 wrapperCol methodModal__bannerLeft">
							<h4 className="textBold methodModal__bannerLeft--text">{this.props.modalState.behanceData[projectDeets].projects[0].name}</h4>
						</div>
						<div className="col-5 wrapperCol methodModal__bannerRight">
							<h4 className="textBold methodModal__bannerRight--text">{this.props.modalState.behanceData[projectDeets].user.username}</h4>
						</div>
						<div className="col-4 methodModal__bottomLeft">
							<svg className="methodModal__icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.56 70.38"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="methodModal__icons--grey" d="M75.54,33C64.91,21.24,53.66,15.55,42.12,16.1c-18,.84-29.91,16.47-30.41,17.13l-.94,1.27.94,1.27c.53.72,13.28,17.73,31.68,18.16h.72c11.1,0,21.69-6.11,31.51-18.19l1.15-1.41Zm-34.72-3.5a4,4,0,1,1-4-4A4,4,0,0,1,40.82,29.49Zm-24.66,5c2.69-3.09,10.4-10.94,20.94-13.42a15.29,15.29,0,0,0-.84,27.4C26.27,45.5,18.8,37.62,16.16,34.52ZM50.23,48.93a15.29,15.29,0,0,0,.3-27.72c7,1.78,13.88,6.2,20.61,13.28C64.42,42.36,57.42,47.18,50.23,48.93Z"/><path className="methodModal__icons--grey" d="M65.51,0H22.06L0,35.18,22.06,70.37H65.5l22.06-35.2Zm-3,64.59H25L6.57,35.18,25,5.77H62.55L81,35.18Z"/></g></g></svg>
							{/* <img className="methodModal__icons" src={require("../icons/menu/viewsGrey.svg")} alt="loading..." /> */}
							<h5 className="textThin methodModal__bottomLeft--text">Views: {this.props.modalState.behanceData[projectDeets].projects[0].stats.views}</h5>
						</div>
						<div className="col-4 methodModal__bottomMiddle">
							<img className="methodModal__icons" src={require("../icons/menu/likesGrey.svg")} alt="loading..." />
							<h5 className="textThin methodModal__bottomMiddle--text">Likes: {this.props.modalState.behanceData[projectDeets].projects[0].stats.appreciations}</h5>
						</div>
						<div className="col-4 methodModal__bottomRight">
							<img className="methodModal__icons" src={require("../icons/menu/commentsGrey.svg")} alt="loading..." />
							<h5 className="textThin methodModal__bottomRight--text">Comments: {this.props.modalState.behanceData[projectDeets].projects[0].stats.comments}</h5>
						</div>
						<div className="col-12 methodModal__bannerBottom">
							<p className="textThin methodModal__bannerBottom--text">{this.props.modalState.behanceData[projectDeets].projects[0].fields[0]} | {this.props.modalState.behanceData[projectDeets].projects[0].fields[1]} | {this.props.modalState.behanceData[projectDeets].projects[0].fields[2]}</p>
						</div>


					</div>
				</div>
			</div>
		);
	}
}

export default Modal;

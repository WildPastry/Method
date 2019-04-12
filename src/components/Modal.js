// IMPORT
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
							<h4 className="textBold">{this.props.modalState.behanceData[projectDeets].projects[0].name}</h4>
						</div>
						<div className="col-5 wrapperCol methodModal__bannerRight">
							<h4 className="textBold">{this.props.modalState.behanceData[projectDeets].user.username}</h4>
						</div>
						<div className="col-4 methodModal__bottomLeft">
							<img className="methodModal__icons" src={require("../icons/menu/viewsGrey.svg")} alt="loading..." />
							<h5 className="textThin">Views: {this.props.modalState.behanceData[projectDeets].projects[0].stats.views}</h5>
						</div>
						<div className="col-4 methodModal__bottomMiddle">
							<img className="methodModal__icons" src={require("../icons/menu/likesGrey.svg")} alt="loading..." />
							<h5 className="textThin">Likes: {this.props.modalState.behanceData[projectDeets].projects[0].stats.appreciations}</h5>
						</div>
						<div className="col-4 methodModal__bottomRight">
							<img className="methodModal__icons" src={require("../icons/menu/commentsGrey.svg")} alt="loading..." />
							<h5 className="textThin">Comments: {this.props.modalState.behanceData[projectDeets].projects[0].stats.comments}</h5>
						</div>
						<div className="col-12 methodModal__bannerBottom">
							<p className="textThin">{this.props.modalState.behanceData[projectDeets].projects[0].fields[0]} | {this.props.modalState.behanceData[projectDeets].projects[0].fields[1]} | {this.props.modalState.behanceData[projectDeets].projects[0].fields[2]}</p>
						</div>


					</div>
				</div>
			</div>
		);
	}
}

export default Modal;

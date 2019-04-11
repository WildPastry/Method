// IMPORT
import React, { Component } from "react";

// USER DATA
class Modal extends Component {
	render() {
		console.log(this.props.modalState.behanceData);
		console.log(this.props.modalState.behanceData[0].projects[0]);
		// console.log(this.props.modalState.behanceData[0].projects[0].covers[808]);
		// console.log(this.props.modalState.behanceData[0].user.username);

		for (var i = 0; i < this.props.modalState.behanceData.length; i++) {
			// console.log(this.props.modalState.behanceData.length);
			// console.log(this.props.modalState.behanceData[i].user.username);
			console.log(this.props.modalState.behanceData[i].projects[0].url);

			for (
				var j = 0;
				j < this.props.modalState.behanceData[j].projects.length;
				j++
			) {
				// console.log(this.props.modalState.behanceData[j].projects.length);
				// console.log(this.props.modalState.behanceData[j].projects[j]);
			}
		}

		return (
			<div className="row">
				<div className="col-12"></div>

			</div>
		);
	}
}

export default Modal;

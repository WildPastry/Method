// IMPORT
import React, { Component } from "react";

// USER DATA
class Modal extends Component {
	render() {
		console.log(this.props.modalState.behanceData);
		// console.log(this.props.modalState.behanceData[0].projects[0]);
		console.log(this.props.modalState.behanceData[0].projects[0].covers[808]);
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
			// console.log(this.props.modalState.behanceData[0].projects[0]);
		}

		return (
			<div id="methodLoader">
				<div className="methodModal bgDark">
					<div className="methodModal__top">
						<img className="methodModal__top--image" src={this.props.modalState.behanceData[0].projects[0].covers[808]} alt="loading...." />
					</div>
					<div className="row wrapperCol bgLightPink textDark methodModal__bottom">
						<div className="col-6 methodModal__bottomLeft">
							<div className="methodModal__bottomLeft--Designer">
								<h4 className="textBold">Designer Name</h4>
							</div>
							<div className="methodModal__bottomLeft--likes">
								<img src="../../icons/menu/likesGreen.svg" alt="loading..." />
								<h5 className="">likes</h5>
							</div>
						</div>
						<div className="col-6 methodModal__bottomRight">
							<div>
								<h4 className="textBold">Project Name</h4>
							</div>
						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default Modal;

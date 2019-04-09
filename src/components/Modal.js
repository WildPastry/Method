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
			// console.log(this.props.modalState.behanceData[i].projects[0]);

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
			<div>
				<button
					type="button"
					className="btn bgLightPink"
					data-toggle="modal"
					data-target="#projectModal"
				>
					Show Modal
				</button>

				<div
					className="modal fade"
					id="projectModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content bgDark">
							<div className="modal-header">
								<h4
									className="modal-title textLight modalProjectName"
									id="exampleModalLabel"
								>
									{this.props.modalState.behanceData[0].user.username}
								</h4>
								{/* {this.props.modalState.behanceData.map(projectsUserName => (
									<h4	key={projectsUserName.user.id}
										className="modal-title textLight modalProjectName"
										id="exampleModalLabel"
									>
										{projectsUserName[1].user.username}
									</h4>
								))}
								; */}
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">

									<img
										className="modalImage"
										src={this.props.modalState.behanceData[0].projects[0].url}
										alt="loading...."
									/>
								

								{/* {this.props.modalState.behanceData.map(projectsList => (
									<img
										className="modalImage"
										src={projectsList.projects.covers.max_808}
										alt="loading...."
									/>
								))}
								; */}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;

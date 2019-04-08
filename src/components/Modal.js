// IMPORT
import React, { Component } from "react";

// USER DATA
class Modal extends Component {
	render() {
		console.log(this.props.modalState.behanceData);
		console.log(this.props.modalState.behanceData[0].projects[0].covers[808]);

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
									project title
								</h4>
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
									src={
										this.props.modalState.behanceData[0].projects[0].covers
											.max_808
									}
									alt="loading...."
								/>
							</div>
							<div className="modal-footer">
								<h4 className="modalProjectName textLight">Designer name</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;

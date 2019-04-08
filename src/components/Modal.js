// IMPORT
import React, { Component } from "react";

// USER DATA
class Modal extends Component {
	render() {
		console.log("Modal Component");
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
								<h5 className="modal-title textLight modalProject" id="exampleModalLabel">
									project title
								</h5>
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
								<div />
							</div>
							<div className="modal-footer" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;

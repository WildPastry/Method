import React, { Component } from "react";
import FallbackImage from "../images/fallback.jpg";

class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentProject: this.props.modalStateCurrentProject,
			currentProjectName: this.props.modalStateCurrentProjectName,
			currentProjectUserName: this.props.modalStateCurrentProjectUserName,
			currentProjectViews: this.props.modalStateViews,
			currentProjectAppreciations: this.props.modalStateAppreciations,
			currentProjectComments: this.props.modalStateComments,
			fieldsOne: this.props.modalStateFieldsOne,
			fieldsTwo: this.props.modalStateFieldsTwo,
			fieldsThree: this.props.modalStateFieldsThree
		};
		this.changeProject = this.changeProject.bind(this);
		this.changePageFromModal = this.changePageFromModal.bind(this);
	}

	changePageFromModal(value) {
		this.props.changePageFromModal(value);
	}

	changeProject() {
		this.setState({
			currentProject: "",
			currentProjectName: "",
			currentProjectUserName: "",
			currentProjectViews: "",
			currentProjectAppreciations: "",
			currentProjectComments: "",
			fieldsOne: "",
			fieldsTwo: "",
			fieldsThree: ""
		});
	}

	render() {
		var currentProjectImage = this.state.currentProject;
		var currentProjectName = this.state.currentProjectName;
		var currentProjectUserName = this.state.currentProjectUserName;
		var currentProjectViews = this.state.currentProjectViews;
		var currentProjectAppreciations = this.state.currentProjectAppreciations;
		var currentProjectComments = this.state.currentProjectComments;
		var fieldsOne = this.state.fieldsOne;
		var fieldsTwo = this.state.fieldsTwo;
		var fieldsThree = this.state.fieldsThree;

		return (
			<React.Fragment>
					<div
						id="methodModal"
						onClick={this.changePageFromModal.bind(this, "projects")}
					>
						<div
							className={this.props.modalClose}
							onClick={this.changePageFromModal.bind(this, "projects")}
						>
							<h2>X</h2>
						</div>
						<div className="methodModal bgDark">
							<div className="methodModal__top">
								<img
									className="methodModal__top--image"
									src={currentProjectImage}
									onError={e => {
										e.target.src = FallbackImage;
									}}
									alt="Project Cover"
								/>
							</div>
							<div className={this.props.modalBody}>
								<div className="col-7 wrapperCol methodModal__bannerLeft">
									<h5 className={this.props.modalLeftHClass}>
										{currentProjectName}
									</h5>
								</div>
								<div className="col-5 wrapperCol methodModal__bannerRight">
									<h5 className={this.props.modalRightHClass}>
										{currentProjectUserName}
									</h5>
								</div>
								<div className="col-4 methodModal__bottomLeft">
									<svg className="methodModal__icons" viewBox="0 0 87.56 70.38">
										<g id="Layer_2" data-name="Layer 2">
											<g id="Layer_1-2" data-name="Layer 1">
												<path
													className="methodModal__icons--grey"
													d="M75.54,33C64.91,21.24,53.66,15.55,42.12,16.1c-18,.84-29.91,16.47-30.41,17.13l-.94,1.27.94,1.27c.53.72,13.28,17.73,31.68,18.16h.72c11.1,0,21.69-6.11,31.51-18.19l1.15-1.41Zm-34.72-3.5a4,4,0,1,1-4-4A4,4,0,0,1,40.82,29.49Zm-24.66,5c2.69-3.09,10.4-10.94,20.94-13.42a15.29,15.29,0,0,0-.84,27.4C26.27,45.5,18.8,37.62,16.16,34.52ZM50.23,48.93a15.29,15.29,0,0,0,.3-27.72c7,1.78,13.88,6.2,20.61,13.28C64.42,42.36,57.42,47.18,50.23,48.93Z"
												/>
												<path
													className="methodModal__icons--grey"
													d="M65.51,0H22.06L0,35.18,22.06,70.37H65.5l22.06-35.2Zm-3,64.59H25L6.57,35.18,25,5.77H62.55L81,35.18Z"
												/>
											</g>
										</g>
									</svg>
									<h5 className="textThin methodModal__bottomLeft--text">
										Views: {currentProjectViews}
									</h5>
								</div>
								<div className="col-4 methodModal__bottomMiddle">
									<svg className="methodModal__icons" viewBox="0 0 87.6 70.4">
										<g>
											<path
												className="methodModal__icons--grey"
												d="M65.5,0H22.1L0,35.2l22,35.2h42h1.5l22-35.2L65.5,0z M62.6,64.6H43.8H25L6.6,35.2L25,5.8h37.5L81,35.2
		L62.6,64.6z"
											/>
											<path
												className="methodModal__icons--grey"
												d="M67.1,26.4c-1.2-1.5-3-2.3-4.9-2.4h-8.6c1.3-3.9,2.5-9.1,0.6-11.9C53.4,10.8,52,10,50.4,10
		c-3.9-0.2-6.5,4.8-8.5,10.2c-1.1,2.8-3.4,4.7-5.1,5.7c-0.3-0.8-1.1-1.4-2.1-1.4h-11c-2.7,0-4.9,2.2-5,4.9v17.9
		c0.1,2.7,2.3,4.9,5,4.9h8.2c1.7,0,3.2-0.8,4.1-2.1c7.7,1.7,10.9,2.3,17.2,2.3c1.4,0,2.9,0,4.7,0c5.6-0.2,8.3-6.9,10.5-16.8
		C69.2,31.6,68.8,28.5,67.1,26.4z M33.3,47.3c-0.1,0.7-0.6,1.2-1.4,1.2h-8.2c-0.7,0-1.3-0.5-1.3-1.2V29.4c0-0.7,0.6-1.3,1.3-1.2
		l9.5,0V47.3z M64.8,34.7c-2.1,9.6-4.3,13.9-7,13.9c-9.4,0.3-11.8-0.1-20.8-2.1V30c2-1,6.5-3.6,8.4-8.5c2.7-7.2,4.3-7.8,4.9-7.8
		c0.7,0,0.9,0.3,1,0.4c0.9,1.5,0.1,6-1.9,11.1c-0.1,0.2-0.1,0.5-0.1,0.7c0,1,0.8,1.8,1.8,1.8h11.2c0.8,0,1.6,0.4,2.1,1
		C65.2,29.8,65.4,31.9,64.8,34.7z"
											/>
										</g>
									</svg>
									<h5 className="textThin methodModal__bottomMiddle--text">
										Likes: {currentProjectAppreciations}
									</h5>
								</div>
								<div className="col-4 methodModal__bottomRight">
									<svg className="methodModal__icons" viewBox="0 0 87.56 70.38">
										<g id="Layer_2" data-name="Layer 2">
											<g id="Layer_1-2" data-name="Layer 1">
												<path
													className="methodModal__icons--grey"
													d="M43.78,64.6H62.56L81,35.18,62.55,5.77H25L6.57,35.18,25,64.6ZM64,70.38h-42L0,35.18,22.06,0H65.51l22,35.18L65.5,70.38Z"
												/>
												<path
													className="methodModal__icons--grey"
													d="M61.46,60.73,47.31,49.51H25.87A5.92,5.92,0,0,1,20,43.6V21.75a5.92,5.92,0,0,1,5.91-5.91H61.72a5.92,5.92,0,0,1,5.91,5.91V43.6a5.92,5.92,0,0,1-5.91,5.91h-.26ZM25.87,19.84A1.92,1.92,0,0,0,24,21.75V43.6a1.92,1.92,0,0,0,1.91,1.91H48.71l8.75,6.94V45.51h4.26a1.92,1.92,0,0,0,1.91-1.91V21.75a1.92,1.92,0,0,0-1.91-1.91Z"
												/>
												<path
													className="methodModal__icons--grey"
													d="M52.59,27.13H33a1.5,1.5,0,0,1,0-3H52.59a1.5,1.5,0,0,1,0,3Z"
												/>
												<path
													className="methodModal__icons--grey"
													d="M55.84,33.76H36.21a1.5,1.5,0,1,1,0-3H55.84a1.5,1.5,0,1,1,0,3Z"
												/>
												<path
													className="methodModal__icons--grey"
													d="M51.46,40.38H31.84a1.5,1.5,0,1,1,0-3H51.46a1.5,1.5,0,0,1,0,3Z"
												/>
											</g>
										</g>
									</svg>
									<h5 className="textThin methodModal__bottomRight--text">
										Comments: {currentProjectComments}
									</h5>
								</div>
								<div className="col-12 methodModal__bannerBottom">
									<p className="textThin methodModal__bannerBottom--text">
										{fieldsOne} | {fieldsTwo} | {fieldsThree}
									</p>
								</div>
							</div>
						</div>
					</div>
			</React.Fragment>
		);
	}
}

export default Modal;

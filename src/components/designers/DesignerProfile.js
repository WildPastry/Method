import React, { Component } from "react";
import FallbackImage from "../../images/fallback.jpg";
import { CSSTransitionGroup } from "react-transition-group";

var designerBar;

class DesignerProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentDesignerProfile: this.props.designerProfileData["currentDesigner"],
			designerProfileURL: " ",
			profilePosition: "center",
			profileSize: "cover",
			profileRepeat: "no-repeat"
		};
		this.changeDesigner = this.changeDesigner.bind(this);
		this.changePageFromProfiles = this.changePageFromProfiles.bind(this);
	}

	changePageFromProfiles(value) {
		this.props.changePageFromProfiles(value);
	}

	changeDesigner() {
		this.setState({
			currentDesignerProfile: ""
		});
	}

	render() {
		var designerProfileDetails = this.props.designerProfileData.behanceData;
		if (this.state.currentDesignerProfile === "washe") {
			designerBar = 0;
		} else if (this.state.currentDesignerProfile === "bogdan_aksonenko") {
			designerBar = 1;
		} else if (this.state.currentDesignerProfile === "LenaLaBallena") {
			designerBar = 2;
		} else if (this.state.currentDesignerProfile === "mateuszkozlowski") {
			designerBar = 3;
		} else if (this.state.currentDesignerProfile === "h3l") {
			designerBar = 4;
		} else if (this.state.currentDesignerProfile === "ahoyillustration") {
			designerBar = 5;
		} else if (this.state.currentDesignerProfile === "mishapriem") {
			designerBar = 6;
		} else if (this.state.currentDesignerProfile === "godsinlovea3ef") {
			designerBar = 7;
		} else if (this.state.currentDesignerProfile === "angelinaout") {
			designerBar = 8;
		} else if (this.state.currentDesignerProfile === "nfiasche89") {
			designerBar = 9;
		} else if (this.state.currentDesignerProfile === "surrealcyborg") {
			designerBar = 10;
		} else if (this.state.currentDesignerProfile === "AndreiPokrovskii") {
			designerBar = 11;
		}

		return (
			<React.Fragment>
				<CSSTransitionGroup
					transitionName="methodLoad"
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionEnter={false}
					transitionLeave={false}
				>
					<div className={this.props.designerProfileBarClass}>
						<div className="imageBox col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<div
								style={{
									backgroundImage:
										"url(" +
										designerProfileDetails[designerBar].user.images[276] +
										")",
									backgroundPosition: "center",
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
								}}
								className="designerBar__image"
							/>
						</div>

						<div className="wrapperColBig col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<h4 className={this.props.designerProfileHClass}>
								{designerProfileDetails[designerBar].user.username}
							</h4>
							<p className={this.props.designerProfilePClassMargin}>
								{designerProfileDetails[designerBar].user.fields[0]} |{" "}
								{designerProfileDetails[designerBar].user.fields[1]} |{" "}
								{designerProfileDetails[designerBar].user.fields[2]}
							</p>

							<div className="totalViews">
								<svg viewBox="0 0 90.81 70.83">
									<g id="Layer_2" data-name="Layer 2">
										<g id="Layer_1-2" data-name="Layer 1">
											<path
												className={this.props.designerProfileIconClass}
												d="M45.77,54.35h-.71c-18.4-.43-31.15-17.44-31.69-18.16l-.93-1.27.94-1.27c.5-.66,12.4-16.29,30.41-17.13C55.33,16,66.57,21.65,77.21,33.4l1.22,1.35-1.15,1.41C67.47,48.23,56.87,54.35,45.77,54.35ZM17.83,34.93c3.24,3.81,13.8,14.86,27.36,15.16h.57c9.34,0,18.43-5.11,27-15.2C63.45,25.05,53.74,20.31,44,20.75,30.78,21.37,21,31.35,17.83,34.93Z"
											/>
											<path
												className={this.props.designerProfileIconClass}
												d="M45.4,70.83H22.82L0,35.41,22.82,0H68L90.81,35.41,68,70.82Zm-20-4.75h40L85.16,35.41,65.4,4.75h-40L5.65,35.41Z"
											/>
											<path
												className={this.props.designerProfileIconClass}
												d="M38.5,25.91a4,4,0,1,1-4,4,4,4,0,0,1,4-4M45.36,20A15.37,15.37,0,1,1,29.82,35.41,15.45,15.45,0,0,1,45.36,20Z"
											/>
										</g>
									</g>
								</svg>
								<p className={this.props.designerProfilePClassThin}>
									Total Project Views:{" "}
									{designerProfileDetails[designerBar].user.stats.views}
								</p>
							</div>

							<div className="totalAppreciations">
								<svg viewBox="0 0 87.6 70.4">
									<g>
										<path
											className={this.props.designerProfileIconClass}
											d="M65.5,0H22.1L0,35.2l22,35.2h42h1.5l22-35.2L65.5,0z M62.6,64.6H43.8H25L6.6,35.2L25,5.8h37.5L81,35.2
		L62.6,64.6z"
										/>
										<path
											className={this.props.designerProfileIconClass}
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
								<p className={this.props.designerProfilePClassThin}>
									Total Project Appreciations:{" "}
									{designerProfileDetails[designerBar].user.stats.appreciations}
								</p>
							</div>

							<div className="totalFollowers">
								<svg viewBox="0 0 86.8 69.8">
									<g>
										<path
											className={this.props.designerProfileIconClass}
											d="M76,17.5L65.1,0H21.7L10.8,17.5L0,34.9l10.8,17.5l10.9,17.5h43.4L76,52.4l10.8-17.5L76,17.5z M71.3,49.7
		L62,64.6H24.8l-9.3-14.9L6.3,34.9l9.2-14.8l9.3-14.9H62l9.3,14.9l9.2,14.8L71.3,49.7z"
										/>
										<path
											className={this.props.designerProfileIconClass}
											d="M45.7,20.4l-2.3,2.3l-2.3-2.3c-4.7-4.7-12.5-4.7-17.2,0c-2.3,2.3-3.5,5.4-3.5,8.6c0,3.2,1.3,6.3,3.5,8.6
		L43.4,57l19.5-19.5c4.7-4.7,4.7-12.5,0-17.2C58.1,15.6,50.4,15.6,45.7,20.4z M60.7,35.3L43.4,52.7L26.1,35.4
		c-1.7-1.7-2.7-4-2.7-6.4c0-2.4,0.9-4.7,2.7-6.4c1.8-1.8,4.1-2.7,6.4-2.7c2.3,0,4.6,0.9,6.4,2.7l4.5,4.5l4.5-4.5
		c3.5-3.5,9.3-3.5,12.8,0c1.7,1.7,2.7,4,2.7,6.4S62.4,33.6,60.7,35.3z"
										/>
									</g>
								</svg>
								<p className={this.props.designerProfilePClassThin}>
									Followers:{" "}
									{designerProfileDetails[designerBar].user.stats.followers}
								</p>
							</div>
						</div>
					</div>

					<div className="row projectImageRow">
						{designerProfileDetails[designerBar].projects.map(
							designerProfileImages => (
								<div
									key={designerProfileImages.id}
									className="wrapperCol col-xs-12 col-sm-6 col-md-4 col-lg-4"
								>
									{" "}
									<img
										onClick={this.changePageFromProfiles.bind(this, "modal")}
										className="projectImage"
										src={designerProfileImages.covers[404]}
										onError={e => {
											e.target.src = FallbackImage;
										}}
										alt="Project Thumbnail"
									/>{" "}
								</div>
							)
						)}
						;
					</div>
				</CSSTransitionGroup>
			</React.Fragment>
		);
	}
}

export default DesignerProfile;

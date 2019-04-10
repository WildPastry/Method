import React, { Component } from "react";
import FallbackImage from "../../images/fallback.jpg";

var designerBar;

class DesignerProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentDesignerProfile: this.props.designerProfileState["currentDesigner"]
		};
		this.changeDesigner = this.changeDesigner.bind(this);
		console.log("THE CURRENT DESIGNER IS");
		console.log(this.state.currentDesignerProfile);
	}

	changeDesigner() {
		this.setState({
			currentDesignerProfile: ""
		});
	}

	render() {
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
			<div>
				<div className="row">
					<div className="col-3 wrapperCol">
						<img
							src={
								this.props.designerProfileState.behanceData[designerBar].user
									.images[276]
							}
							onError={e => {
								e.target.src = FallbackImage;
							}}
							alt="Profile thumbnail loading...."
						/>
					</div>

					<div className="col-9 wrapperCol">
						<div className="designerAttributes wrapperCol textDark">
							<h2>
								<span className="designerDetails">
									{
										this.props.designerProfileState.behanceData[designerBar]
											.user.username
									}
								</span>
							</h2>
						</div>
						<div className="designerAttributes wrapperCol textDark">
							<h5>
								Total Project Views:{" "}
								<span className="designerDetails">
									{
										this.props.designerProfileState.behanceData[designerBar]
											.user.stats.views
									}
								</span>
							</h5>
						</div>
						<div className="designerAttributes wrapperCol textDark">
							<h5>
								Total Project Appreciations:{" "}
								<span className="designerDetails">
									{
										this.props.designerProfileState.behanceData[designerBar]
											.user.stats.appreciations
									}
								</span>
							</h5>
						</div>
						<div className="designerAttributes wrapperCol textLightDark">
							<h5>
								Followers:{" "}
								<span className="designerDetails">
									{
										this.props.designerProfileState.behanceData[designerBar]
											.user.stats.followers
									}
								</span>
							</h5>
						</div>
					</div>
				</div>

				<div className="row projectImageRow">
					{this.props.designerProfileState.behanceData[
						designerBar
					].projects.map(designerProfileImages => (
						<div
							key={designerProfileImages.id}
							className="wrapperCol col-xs-12 col-sm-6 col-md-4 col-lg-4"
						>
							{" "}
							<img
								className="projectImage"
								src={designerProfileImages.covers[404]}
								onError={e => {
									e.target.src = FallbackImage;
								}}
								alt="Project thumbnail loading..."
							/>{" "}
						</div>
					))}
					;
				</div>
			</div>
		);
	}
}

export default DesignerProfile;

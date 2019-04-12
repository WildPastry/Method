import React, { Component } from "react";
import FallbackImage from "../../images/fallback.jpg";

var designerBar;

class DesignerProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentDesignerProfile: this.props.designerProfileData["currentDesigner"]
		};
		this.changeDesigner = this.changeDesigner.bind(this);
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
			<div>
				<div className={this.props.designerProfileBarClass}>
					<div className="col-2 imageBox">
						<img
							className="designerBar__image"
							src={designerProfileDetails[designerBar].user.images[276]}
							alt="Profile Thumbnail"
						/>
					</div>

					<div className="wrapperCol col-10">
						<h5 className={this.props.designerProfileHClass}>
							{designerProfileDetails[designerBar].user.username}
						</h5>
						<p className={this.props.designerProfilePClass}>
							Total Project Views:{" "}
							{designerProfileDetails[designerBar].user.stats.views}
						</p>
						<p className={this.props.designerProfilePClass}>
							Total Project Appreciations:{" "}
							{
								designerProfileDetails[designerBar].user.stats
									.appreciations
							}
						</p>
						<p className={this.props.designerProfilePClass}>
							Followers:{" "}
							{designerProfileDetails[designerBar].user.stats.followers}
						</p>
						<p className={this.props.designerProfilePClass}>
							Fields:{" "}
							{designerProfileDetails[designerBar].user.fields[0]} |{" "}
							{designerProfileDetails[designerBar].user.fields[1]} |{" "}
							{designerProfileDetails[designerBar].user.fields[2]}
						</p>
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
			</div>
		);
	}
}

export default DesignerProfile;

// IMPORT
import React, { Component } from "react";

var designerBar;

// console.log(userDetails);
// for (let index = 0; index < userDetails.length; index++) {
//   const element = userDetails[index];
//   console.log(element['projects'])
// }

// USER DATA
class DesignerProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentDesignerProfile: this.props.designerProfileState['currentDesigner']
		};
    this.testBar = this.testBar.bind(this);
    console.log("THE CURRENT DESIGNER IS");
    console.log(this.state.currentDesignerProfile);
	}

	testBar() {
		this.setState({
			currentDesignerProfile: ""
		});
	}

	render() {
    // console.log("FROM DESIGNER PROFILE");
    // console.log(this.props.designerProfileState);
		var userDetails = this.props.designerProfileState.behanceData;
		// console.log(userDetails);

		console.log(userDetails);
		for (let i = 0; i < userDetails.length; i++) {
      const designerUserName = userDetails[i].user.username;
      console.log(designerUserName)
    }
    

		// console.log(this.props.designerProfileState.behanceData);
		// console.log(this.state.currentDesignerProfile);

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
				<div className="row designerBar bgLightPink">
					<div className="col-2">
						<img className="designerBar__image"
							src={
								this.props.designerProfileState.behanceData[designerBar].user
									.images[276]
							}
							alt="loading...."
						/>
					</div>

					<div className="col-10 designerBar__info">
							<h3 className="textBold textDark designerBar__info--user">
									{
										this.props.designerProfileState.behanceData[designerBar]
											.user.username
									}
							</h3>
							<h5 className="textDark">
								Total Project:{" "}
									{
										this.props.designerProfileState.behanceData[designerBar]
											.user.stats.views
									}
							</h5>
							<h5 className="textDark">
								Total Project Appreciations:{" "}
									{
										this.props.designerProfileState.behanceData[designerBar]
											.user.stats.appreciations
									}
							</h5>
							<h5 className="textDark">
								Followers:{" "}
									{
										this.props.designerProfileState.behanceData[designerBar]
											.user.stats.followers
									}
							</h5>
							<h5 className="textDark">
							Fields:{" "}
									{
										this.props.designerProfileState.behanceData[designerBar]
											.user.fields[0]
									} | {
										this.props.designerProfileState.behanceData[designerBar]
											.user.fields[1]
									} | {
										this.props.designerProfileState.behanceData[designerBar]
											.user.fields[2]
									}
							</h5>
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
								alt="loading..."
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

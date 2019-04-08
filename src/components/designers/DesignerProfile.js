// IMPORT
import React, { Component } from "react";

// USER DATA
class DesignerProfile extends Component {
	render() {
		console.log("DesignerProfile Component");
		return (
			<div className={this.props.designerProfileState.cardClass}>
				<h5 className={this.props.designerProfileState.hClass}>DesignerProfile</h5>
			</div>
		);
	}
}

export default DesignerProfile;

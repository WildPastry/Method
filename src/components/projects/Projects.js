// IMPORT
import React, { Component } from "react";

// USER DATA
class Projects extends Component {
	render() {
		console.log("Projects Component");
		return (
				<div className={this.props.projectsState.cardClass}>
					<h5 className={this.props.projectsState.hClass}>Projects</h5>
				</div>
		);
	}
}

export default Projects;

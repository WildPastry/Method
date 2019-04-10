// IMPORT
import React, { Component } from "react";

// PROJECT DATA
class Projects extends Component {
	render() {
		var projectDetails = this.props.projectsState.behanceData;

		return projectDetails.map(projectDetailsMapped => (
			<div
				key={projectDetailsMapped.user.id}
				className="col-xs-12 col-sm-6 col-md-4 col-lg-4"
			>
				{projectDetailsMapped["projects"].map(singleProject => (
						<div
							key={singleProject.id}
							className={this.props.projectsState.projectCardClass}
						>
							<div className="cardProject--Img">
								<img
									className="designerProject--Img"
									src={singleProject.covers["max_808"]}
									alt="Behance project loading... "
								/>
							</div>

							<div className="wrapperProject--Details">
								<div className="wrapper paraStyle--DesignerProject">
									<p className={this.props.projectsState.projectpClass}>
										{singleProject.name}
									</p>
									<p className={this.props.projectsState.captionClass}>
										Views: {singleProject.stats.views}
									</p>
								</div>
							</div>
						</div>
				))}
			</div>
		));
	}
}

export default Projects;

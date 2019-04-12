import React, { Component } from "react";
import FallbackImage from "../../images/fallback.jpg";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.changePageFromProjects = this.changePageFromProjects.bind(this);
	}

	changePageFromProjects(value) {
		this.props.changePage(value);
	}

	render() {
		var projectDetails = this.props.projectsData;
		console.log(projectDetails);
		return projectDetails.projects.map(projectDetailsMapped => (
			<div
				key={projectDetailsMapped.id}
				onClick={this.changePageFromProjects.bind(this, "modal")}
				className="wrapperCol col-xs-12 col-sm-6 col-md-4 col-lg-4"
			>
				<div className={this.props.projectsCardClass}>
					<img
						className="designerProject--Img"
						src={projectDetailsMapped.covers["max_808"]}
						onError={e => {
							e.target.src = FallbackImage;
						}}
						alt="Behance Project"
					/>
					<div className="wrapperProject--Details">
						<div className="wrapper paraStyle--DesignerProject">
							<p className={this.props.projectsHClass}>
								{projectDetailsMapped.name}
							</p>
							<p className={this.props.projectsCaptionClass}>
								Views: {projectDetailsMapped.stats.views}
							</p>
						</div>
					</div>
				</div>
				{projectDetailsMapped.map(singleProject => (
					<div
						key={singleProject.id}
						className={this.props.projectsCardClass}
					>
						<div className="cardProject--Img">
							<img
								className="designerProject--Img"
								src={singleProject.covers["max_808"]}
								onError={e => {
									e.target.src = FallbackImage;
								}}
								alt="Behance Project"
							/>
						</div>
						<div className="wrapperProject--Details">
							<div className="wrapper paraStyle--DesignerProject">
								<p className={this.props.projectsPClass}>
									{singleProject.name}
								</p>
								<p className={this.props.projectsCaptionClass}>
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

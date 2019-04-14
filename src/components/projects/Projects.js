import React, { Component } from "react";
import FallbackImage from "../../images/fallback.jpg";
import { CSSTransitionGroup } from "react-transition-group";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.changePageFromProjects = this.changePageFromProjects.bind(this);
	}

	changePageFromProjects(value) {
		var options = {
			page: "modal",
			project: value[0],
			projectName: value[1],
			projectUserName: value[2]
		};
		// console.log(value);
		// console.log(value[0]);
		// console.log(value[1]);
		// console.log(value[2]);
		this.props.changePageFromProjects(options);
	}

	render() {
		var projectDetails = this.props.projectsData;

		return projectDetails.map(projectDetailsMapped => (
			<div
				key={projectDetailsMapped.user.id}
				className="col-xs-12 col-sm-6 col-md-4 col-lg-4"
			>
				<CSSTransitionGroup
					transitionName="methodLoad"
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionEnter={false}
					transitionLeave={false}
				>
					{projectDetailsMapped["projects"].map(singleProject => (
						<div
							key={singleProject.id}
							className={this.props.projectsCardClass}
						>
							<div
								className="cardProject--Img"
								onClick={this.changePageFromProjects.bind(this, [
									singleProject.covers.max_808,
									singleProject.name,
									projectDetailsMapped.user.username
								])}
							>
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
				</CSSTransitionGroup>
			</div>
		));
	}
}

export default Projects;

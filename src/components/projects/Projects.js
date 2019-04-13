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
		this.props.changePageFromProjects(value);
	}

	render() {
		var projectDetails = this.props.projectsData;
		return projectDetails.projects.map(projectDetailsMapped => (
			<div
				key={projectDetailsMapped.id}
				onClick={this.changePageFromProjects.bind(this, "modal")}
				className="col-xs-12 col-sm-6 col-md-4 col-lg-4"
			>
				<CSSTransitionGroup
					transitionName="methodLoad"
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionEnter={false}
					transitionLeave={false}
				>
					<div className={this.props.projectsCardClass}>
						<div className="cardProject--Img">
							<img
								className="designerProject--Img"
								src={projectDetailsMapped.covers["max_808"]}
								onError={e => {
									e.target.src = FallbackImage;
								}}
								alt="Behance Project"
							/>
						</div>

						<div className="wrapperProject--Details">
							<div className="wrapper paraStyle--DesignerProject">
								<p className={this.props.projectsPClass}>
									{projectDetailsMapped.name}
								</p>
								<p className={this.props.projectsCaptionClass}>
									Views: {projectDetailsMapped.stats.views}
								</p>
							</div>
						</div>
					</div>
				</CSSTransitionGroup>
			</div>
		));
	}
}

export default Projects;

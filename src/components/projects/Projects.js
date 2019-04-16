import React, { Component } from "react";
import FallbackImage from "../../images/fallback.jpg";
import { CSSTransitionGroup } from "react-transition-group";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { search: "" };
		this.changePageFromProjects = this.changePageFromProjects.bind(this);
	}

	changePageFromProjects(value) {
		var options = {
			page: "modal",
			project: value[0],
			projectName: value[1],
			projectUserName: value[2],
			projectViews: value[3],
			projectAppreciations: value[4],
			projectComments: value[5],
			fieldsOne: value[6],
			fieldsTwo: value[7],
			fieldsThree: value[8]
		};
		this.props.changePageFromProjects(options);
	}

	render() {
		var projectDetails = this.props.projectsData;
		return projectDetails.projects.map(projectDetailsMapped => (
			<div
				key={projectDetailsMapped.id}
				className="wrapperCol col-xs-12 col-sm-6 col-md-4 col-lg-4"
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
								onClick={this.changePageFromProjects.bind(this, [
									projectDetailsMapped.covers.max_808,
									projectDetailsMapped.name,
									projectDetailsMapped.owners[0].username,
									projectDetailsMapped.stats.views,
									projectDetailsMapped.stats.appreciations,
									projectDetailsMapped.stats.comments,
									projectDetailsMapped.fields[0],
									projectDetailsMapped.fields[1],
									projectDetailsMapped.fields[2]
								])}
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

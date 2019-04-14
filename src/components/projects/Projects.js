import React, { Component } from "react";
import FallbackImage from "../../images/fallback.jpg";

class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			search: ""
		};

		this.changePageFromProjects = this.changePageFromProjects.bind(this);
		this.updateSearch = this.updateSearch.bind(this);
	}

	changePageFromProjects(value) {
		this.props.changePageFromProjects(value);
	}

	updateSearch(event) {
		this.setState({ search: event.target.value });
	}

	render() {
		var projectDetails = this.props.projectsData.behanceData;
		console.log(this.props.projectsData.behanceData);
		//todo: maybe use an es6 polyfill or lodash to flatten this
		var projects =  projectDetails.map(x => x.projects);
		projects = [].concat.apply([], projects);

		if (this.state.search) {
			//todo: maybe use es6 polyfill for .includes() instead of indexOf
			projects = projects
				.filter(x => {
					if (x.name.toLowerCase().indexOf(this.state.search) !== -1) {
						return true;
					}

					var lowerCaseFields = x.fields.map(y => y.toLowerCase());
					if (lowerCaseFields.indexOf(this.state.search) !== -1) {
						return true;
					}
					
					return false;
				});
		}

		return (
			<div>
				<input
					name="search"
					type="search"
					value={this.state.search}
					onChange={this.updateSearch}
				/>

				<div className="row">
					{projects.map(project => (
						<div
							key={project.id}
							onClick={this.changePageFromProjects.bind(this, "modal")}
							className="col-xs-12 col-sm-6 col-md-4 col-lg-4"
						>
								<div
									key={project.id}
									className={this.props.projectsCardClass}
								>
									<div className="cardProject--Img">
										<img
											className="designerProject--Img"
											src={project.covers["max_808"]}
											onError={e => {
												e.target.src = FallbackImage;
											}}
											alt="Behance Project"
										/>
									</div>

									<div className="wrapperProject--Details">
										<div className="wrapper paraStyle--DesignerProject">
											<p className={this.props.projectsPClass}>
												{project.name}
											</p>
											<p className={this.props.projectsCaptionClass}>
												Views: {project.stats.views}
											</p>
										</div>
									</div>
								</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Projects;
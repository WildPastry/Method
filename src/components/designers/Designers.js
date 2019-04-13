import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";

class Designers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			designerProfileURL: " ",
			profilePosition: "center",
			profileSize: "cover",
			profileRepeat: "no-repeat"
		};
		this.changePageFromDesigners = this.changePageFromDesigners.bind(this);
	}

	changePageFromDesigners(value) {
		var options = {
			page: "designerProfile",
			designer: value
		};
		this.props.changePageFromDesigners(options);
	}

	render() {
		console.log(this.props.designersData.projects)
		return this.props.designersData.projects.map(designers => (
			<div
				key={designers.id}
				className="wrapperCol col-xs-12 col-sm-6 col-md-4 col-lg-4"
			>
				<CSSTransitionGroup
					transitionName="methodLoad"
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionEnter={false}
					transitionLeave={false}
				>
					<div
						className={this.props.designersCardClass}
						onClick={this.changePageFromDesigners.bind(
							this,
							designers.owners[0].username
						)}
					>
						<div className="wrapperHexagon">
							<div className="hexagonDesigner">
								<div className="hexagonDesigner--in1">
									<div
										style={{
											backgroundImage:
												"url(" + designers.owners[0].images[276] + ")",
											backgroundPosition: "center",
											backgroundSize: "cover",
											backgroundRepeat: "no-repeat"
										}}
										className="hexagonDesigner--in2"
									/>
								</div>
							</div>
						</div>
						<div className="wrapperCard">
							<div
								style={{
									backgroundImage:
										"url(" + designers.covers.max_808 + ")",
									backgroundPosition: "center",
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
								}}
								className="cardDesigner--Img"
							/>
							<div className="wrapperDesignerDetails">
								<div className="paraStyle--DesignerName">
									<h5 className={this.props.designersHClass}>
										{designers.owners[0].username}
									</h5>
								</div>
								<div className="paraStyle--DesignerDiscipline">
									<p className={this.props.designersCaptionClass}>
										{designers.owners[0].fields[0] +
											" | " +
											designers.owners[0].fields[1] +
											" | " +
											designers.owners[0].fields[2]}
									</p>
								</div>
							</div>
						</div>
					</div>
				</CSSTransitionGroup>
			</div>
		));
	}
}

export default Designers;

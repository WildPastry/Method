import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

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
		return this.props.designersData.map(designers => (
			<div
				key={designers.user.id}
				className="wrapperCol col-xs-12 col-sm-6 col-md-4 col-lg-4"
			>
				<CSSTransition
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
							designers.user.username
						)}
					>
						<div className="wrapperHexagon">
							<div className="hexagonDesigner">
								<div className="hexagonDesigner--in1">
									<div
										style={{
											backgroundImage:
												"url(" + designers.user.images[276] + ")",
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
										"url(" + designers.projects[6].covers.max_808 + ")",
									backgroundPosition: "center",
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
								}}
								className="cardDesigner--Img"
							/>
							<div className="wrapperDesignerDetails">
								<div className="paraStyle--DesignerName">
									<h5 className={this.props.designersHClass}>
										{designers.user.username}
									</h5>
								</div>
								<div className="paraStyle--DesignerDiscipline">
									<p className={this.props.designersCaptionClass}>
										{designers.user.fields[0] +
											" | " +
											designers.user.fields[1] +
											" | " +
											designers.user.fields[2]}
									</p>
								</div>
							</div>
						</div>
					</div>
				</CSSTransition>
			</div>
		));
	}
}

export default Designers;

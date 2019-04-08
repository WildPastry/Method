// IMPORT
import React, { Component } from "react";

// USER DATA
class Menu extends Component {
	constructor(props) {
		super(props);
		this.changePageFromMenu = this.changePageFromMenu.bind(this);
	}

	changePageFromMenu(value) {
		this.props.changePage(value);
	}

	render() {
		return (
			<div className="row wrapperMenu">
				<div className="col-sm-4 col-sm-4 d-flex justify-content-center">
					<div className="menu menuDesigner">
						<p
							className={this.props.menuStateClass["mClass"]}
							onClick={this.changePageFromMenu.bind(this, "designers")}
						>
							DESIGNERS
						</p>
					</div>
				</div>
				<div className="col-sm-4 col-sm-4 d-flex justify-content-center">
					<p
						className={this.props.menuStateClass["mClass"]}
						onClick={this.changePageFromMenu.bind(this, "projects")}
					>
						PROJECTS
					</p>
				</div>
				<div className="col-sm-4 col-sm-4 d-flex justify-content-center">
					<p
						className={this.props.menuStateClass["mClass"]}
						onClick={this.changePageFromMenu.bind(this, "search")}
					>
						SEARCH
					</p>
				</div>
			</div>
		);
	}
}

export default Menu;

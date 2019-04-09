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
			<div className="wrapperMenu">
				<div className="menuDesigner">
					<img
						className="menuImg"
						src={require("../icons/menu/profileCream.svg")}
						alt="Designers Icon"
					/>
					<p
						className={this.props.menuStateClass["mClass"]}
						onClick={this.changePageFromMenu.bind(this, "designers")}
					>
						DESIGNERS
					</p>
				</div>

				<div className="menuProjects">
					<img
						className="menuImg"
						src={require("../icons/menu/galleryCream.svg")}
						alt="Projects Icon"
					/>
					<p
						className={this.props.menuStateClass["mClass"]}
						onClick={this.changePageFromMenu.bind(this, "projects")}
					>
						PROJECTS
					</p>
				</div>

				<div className="menuSearch">
					<img
						className="menuImg"
						src={require("../icons/menu/searchCream.svg")}
						alt="Search Icon"
					/>
					<p
						className={this.props.menuStateClass["mClass"]}
						onClick={this.changePageFromMenu.bind(this, "search")}
					>
						SEARCH
					</p>
				</div>

				<div className="menuTheme">
					<img
						className="menuImg"
						src={require("../icons/menu/galleryCream.svg")}
						alt="Theme Icon"
					/>
					<p
						className={this.props.menuStateClass["mClass"]}
						onClick={this.props.changeTheme}
					>
						THEME
					</p>
				</div>
			</div>
		);
	}
}

export default Menu;

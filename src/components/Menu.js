// IMPORT
import React, { Component } from "react";

// USER DATA
class Menu extends Component {
  changePageDisplay(value){
    this.props.menuValue(value)
  }
	render() {
		console.log("Menu Component");
		return (
			<div className="row">
				<div className="col-12 button">
					<button
						className="button buttonDesigner"
						onClick={this.changePageDisplay.bind(this, "designers")}
					>
						Designer
					</button>
					<button
						className="button buttonProjects"
						onClick={this.changePageDisplay.bind(this, "projects")}
					>
						Projects
					</button>
					<button
						className="button buttonSearch"
						onClick={this.changePageDisplay.bind(this, "search")}
					>
						Search
					</button>
				</div>
				<div className="col-4 button" />
				<div className="col-4 button" />
			</div>
		);
	}
}

export default Menu;

import React, { Component } from "react";

class Menu extends Component {
	constructor(props) {
		super(props);
		this.changePageFromMenu = this.changePageFromMenu.bind(this);
	}

	changePageFromMenu(value) {
		this.props.changePageFromMenu(value);
	}

	render() {
		return (
			<div className="wrapperMenu">
				<div
					className="menuDesigner"
					onClick={this.changePageFromMenu.bind(this, "designers")}
				>
					<svg viewBox="0 0 89.02 70.55">
						<g id="Layer_2" data-name="Layer 2">
							<g id="Layer_1-2" data-name="Layer 1">
								<path
									className={this.props.menuStateIconClass}
									d="M75.07,46l6.74-10.68L63.16,5.72H44.51v0H25.86L16.54,20.51h0L7.21,35.28l6.69,10.6c-1.24,1-2.86,2.48-4.57,4.17L0,35.28,11.12,17.65h0L22.26,0h44.5L89,35.28,79.64,50.14c-1.7-1.7-3.32-3.14-4.57-4.19M65,70.55H22.26L12.61,55.26c1.59-1.67,3.19-3.15,4.5-4.29l8.74,13.85H63.17l8.69-13.77c1.32,1.15,2.91,2.62,4.49,4.3l-9.6,15.2Z"
								/>
								<path
									className={this.props.menuStateIconClass}
									d="M34.65,48.42s-10.33,2.71-15.22,8.77l-5-3.41c6.14-7.6,18.46-10.84,18.5-10.85Z"
								/>
								<path
									className={this.props.menuStateIconClass}
									d="M56.16,42.77S68.52,46,74.65,53.62l-5,3.41C64.75,51,54.45,48.26,54.42,48.26Z"
								/>
								<path
									className={this.props.menuStateIconClass}
									d="M53,22a11.56,11.56,0,0,0-17.49,0,15.65,15.65,0,0,0,0,20.63,11.56,11.56,0,0,0,17.49,0,15.21,15.21,0,0,0,3.88-10.31A15.22,15.22,0,0,0,53,22m-8.74-9.74a18.28,18.28,0,0,1,13.54,6.07,21,21,0,0,1,0,28,18.15,18.15,0,0,1-27.09,0,21,21,0,0,1,0-28A18.32,18.32,0,0,1,44.24,12.26Z"
								/>
							</g>
						</g>
					</svg>
					<p className={this.props.menuStateMClass}>DESIGNERS</p>
				</div>
				<div
					className="menuProjects"
					onClick={this.changePageFromMenu.bind(this, "projects")}
				>
					<svg viewBox="0 0 90.85 71.07">
						<g id="Layer_2" data-name="Layer 2">
							<g id="Layer_1-2" data-name="Layer 1">
								<path
									className={this.props.menuStateIconClass}
									d="M45.42,65.23H64.9L84,35.53,64.9,5.82H26L6.82,35.53,26,65.23Zm21,5.84h-21v0H22.88L0,35.53,22.88,0H68L90.85,35.53,68,71.07Z"
								/>
								<polygon
									className={this.props.menuStateIconClass}
									points="10.16 46.71 29.58 21.79 66.68 65.38 62.38 69.2 29.76 30.88 14.62 50.33 10.16 46.71"
								/>
								<polygon
									className={this.props.menuStateIconClass}
									points="48.65 46.64 63.86 29.5 80.12 49.3 75.76 53.03 63.69 38.35 52.85 50.56 48.65 46.64"
								/>
								<path
									className={this.props.menuStateIconClass}
									d="M59.09,12.66a5.86,5.86,0,1,1-5.73,5.85,5.79,5.79,0,0,1,5.73-5.85"
								/>
							</g>
						</g>
					</svg>
					<p className={this.props.menuStateMClass}>PROJECTS</p>
				</div>
				<div
					className="menuSearch"
					onClick={this.changePageFromMenu.bind(this, "search")}
				>
					<svg viewBox="0 0 87.56 70.38">
						<g id="Layer_2" data-name="Layer 2">
							<g id="Layer_1-2" data-name="Layer 1">
								<path
									className={this.props.menuStateIconClass}
									d="M43.69,22.58a11,11,0,1,0,3.24,7.81,11,11,0,0,0-3.24-7.81m8.1,17.14L64.35,49.88a2.77,2.77,0,0,1,.75.89,2.89,2.89,0,0,1,.35,1.1A3,3,0,0,1,65.34,53a2.81,2.81,0,0,1-.53,1,2.88,2.88,0,0,1-.89.75,3.13,3.13,0,0,1-1.11.35A3,3,0,0,1,61.66,55a2.81,2.81,0,0,1-1-.53L47.4,43.8l.59-.57c.23-.21.45-.44.67-.67s.39-.42.58-.65h0l.15-.18q.35-.42.69-.9c.23-.3.44-.61.64-.93l.44-.68ZM35.87,14.27A16.12,16.12,0,1,1,24.47,19,16.11,16.11,0,0,1,35.87,14.27Z"
								/>
								<path
									className={this.props.menuStateIconClass}
									d="M43.78,64.6H62.56L81,35.18,62.55,5.77H25L6.57,35.18,25,64.6ZM64,70.38h-42L0,35.18,22.06,0H65.51l22,35.18L65.5,70.38Z"
								/>
							</g>
						</g>
					</svg>
					<p className={this.props.menuStateMClass}>SEARCH</p>
				</div>

				<div className="menuTheme" onClick={this.props.changeTheme}>
					<svg viewBox="0 0 87.6 70.4">
						<g>
							<g id="Layer_1-2">
								<path
									className={this.props.menuStateIconClass}
									d="M43.8,64.6h18.8L81,35.2L62.5,5.8H25L6.6,35.2L25,64.6H43.8z M64,70.4H22L0,35.2L22.1,0h43.5l22,35.2
			l-22,35.2H64z"
								/>
							</g>
						</g>
						<path
							className={this.props.menuStateIconClass}
							d="M59.2,29.4c0.1-0.6,0.1-1.2,0.1-1.8c0-8.5-7-15.5-15.5-15.5s-15.5,7-15.5,15.5c0,0.6,0.1,1.2,0.1,1.8
	c-4.6,2.7-7.7,7.7-7.7,13.3c0,8.6,7,15.5,15.5,15.5c2.7,0,5.3-0.7,7.6-2c2.3,1.3,4.9,2,7.6,2c8.5,0,15.5-7,15.5-15.5
	C66.9,37.1,63.8,32.1,59.2,29.4z M43.7,15.6c6.6,0,12,5.4,12,12c0,0.1,0,0.2,0,0.3c-1.4-0.4-2.9-0.7-4.4-0.7c-2.7,0-5.3,0.7-7.6,2
	c-2.3-1.3-4.9-2-7.6-2c-1.5,0-3,0.2-4.4,0.7c0-0.1,0-0.2,0-0.3C31.8,21,37.1,15.6,43.7,15.6z M43.7,33.5c1.7,1.4,3.1,3.3,3.8,5.5
	c-1.2,0.4-2.5,0.6-3.8,0.6S41.1,39.4,40,39C40.8,36.8,42.1,34.9,43.7,33.5z M36.9,37.4c-2-1.4-3.6-3.5-4.4-6
	c1.2-0.4,2.5-0.6,3.8-0.6c1.6,0,3.1,0.3,4.4,0.8C38.9,33.2,37.6,35.2,36.9,37.4z M46.9,31.6c1.4-0.5,2.9-0.8,4.4-0.8
	c1.3,0,2.6,0.2,3.8,0.6c-0.8,2.4-2.4,4.5-4.4,6C49.9,35.2,48.6,33.2,46.9,31.6z M36.1,54.8c-6.6,0-12-5.4-12-12c0-4,2-7.6,5.1-9.8
	c1.2,3.4,3.6,6.2,6.8,8c-0.1,0.6-0.1,1.2-0.1,1.8c0,4.4,1.8,8.3,4.7,11.1C39.2,54.5,37.7,54.8,36.1,54.8z M43.7,52.1
	c-2.7-2.2-4.4-5.5-4.4-9.3c0-0.1,0-0.2,0-0.3c1.4,0.4,2.9,0.7,4.4,0.7s3-0.2,4.4-0.7c0,0.1,0,0.2,0,0.3
	C48.2,46.5,46.4,49.9,43.7,52.1z M51.4,54.8c-1.6,0-3.1-0.3-4.4-0.8c2.9-2.8,4.7-6.8,4.7-11.1c0-0.6-0.1-1.2-0.1-1.8
	c3.1-1.8,5.5-4.6,6.8-8c3.1,2.1,5.1,5.7,5.1,9.8C63.4,49.4,58,54.8,51.4,54.8z"
						/>
					</svg>
					<p className={this.props.menuStateMClass}>THEME</p>
				</div>
			</div>
		);
	}
}

export default Menu;

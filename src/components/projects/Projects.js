// IMPORT
import React, { Component } from "react";

// IMPORT LOCAL DATA
import behanceDataFROMJSON from "../data/behanceData.json";

// USER DATA
class Projects extends Component {

	constructor(props) {
		super(props);

		this.state = {
			behanceData: [],
			projects: [],
		};
	}

	componentDidMount() {
		this.setState({
			behanceData : behanceDataFROMJSON,
		});
		for (var i = 0; i < behanceDataFROMJSON.length; i++) {
			this.state.projects.push(behanceDataFROMJSON[i].projects);
		};
		console.log('projects only');
		console.log(this.state.projects);
	}

  render() {
    // let projects = this.state.projects;
    console.log(this.state.projects[0]);
    console.log(this.state.projects[0].name[0]);
    console.log("Projects Component");

    return (
    // <div className="row">
        // <h5 className="textLight text-center">Projects</h5>
        // {projects.map( (projects)=> (
        //       <div className="col-12" key = {projects.id}>
        //         <p> {projects.name}</p>
        //       </div>
        //     ))}
      // </div>


      this.state.projects.map (projectDetails =>(
      <div className = "col"
      key = {projectDetails.id}>
      <p>{projectDetails.name}</p>
      </div>
      )
       ) );
  }
}

export default Projects;
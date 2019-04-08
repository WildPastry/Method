// IMPORT
import React, { Component } from "react";


// USER DATA
class Projects extends Component {

	constructor(props) {
		super(props);

		this.state = {
			behanceData: [],
      projects: [],
		};
	}




  render() {
    var projectDetails = this.props.projectsState.behanceData;
    console.log(projectDetails); 
    console.log("...");
    console.log(projectDetails[0].projects[0].name);
    console.log('...hello');
    console.log(projectDetails[0].projects[0].covers[202]);
    console.log("...");
    console.log(projectDetails[0].projects[0].stats.views);




    // let projects = this.state.projects;
    // console.log(this.state.projects[0]);
    // console.log(this.state.projects[0].name[0]);
    // console.log("Projects Component");

    return (
      projectDetails.map((projectDetailsMapped => (
           <div className="col-3">
           <p className = "textLight text-center">{projectDetails[0].projects[0].name}</p>
           <p className = "textLight text-center">{projectDetails[0].projects[0].stats.views}</p>

           <img src = {projectDetails[0].projects[0].covers[202]}/>

    </div>
        )
      ))
    ) 
  }
}

export default Projects;

{/* <div className="row">
<h5 className="textLight text-center">Projects</h5>
{projects.map( (projects)=> (
      <div className="col-12" key = {projects.id}>
        <p> {projects.name}</p>
      </div>
    ))}
</div> */}

// return (
//   projectDetails.projects.map(projectDetailsMapped => (
    
//     <div
//     key = {projectDetailsMapped.projects.id}
//     className="col-3">
//     <p className = "textLight text-center">{projectDetailsMapped.projects.name}</p>
//     </div>
//   ))
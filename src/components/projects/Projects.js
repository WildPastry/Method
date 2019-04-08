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
    // here it's defined

    console.log(projectDetails);
    for (let index = 0; index < projectDetails.length; index++) {
      const element = projectDetails[index];
      console.log(element['projects'])
      
    }
    // console.log("...");
    // console.log(projectDetails[0].projects[0].name);
    // console.log('...');
    // console.log(projectDetails[0].projects[0].covers[202]);
    // console.log("...");
    // console.log(projectDetails[0].projects[0].stats.views);



// return (
//   projectDetails.map((projectDetailsMapped => (
//        <div className="col-3">
//         <p className = "textLight text-center">{projectDetails[0].projects[0].name}</p>
//         <p className = "textLight text-center">{projectDetails[0].projects[0].stats.views}</p>
//         <img src = {projectDetails[0].projects[0].covers[230]}/>
//        </div>
//         )
//      ))
//     ) 
//   }
// }


return (
  projectDetails.map((projectDetailsMapped => (
       <div
        key={projectDetailsMapped}
        className="col-3"
       >
        {
          projectDetailsMapped['projects'].map((single, i) => {
            return <div>
                <p>{single.name}</p>
              </div>
          })
        }
       </div>
        )
     )) 
    )
  }
}





// return (
//   projectDetails.projects.map(projectDetailsMapped => (
    
//     <div
//     key = {projectDetailsMapped.projects.id}
//     className="col-3">
//     <p className = "textLight text-center">{projectDetailsMapped.projects.name}</p>
//     </div>
//   ))




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
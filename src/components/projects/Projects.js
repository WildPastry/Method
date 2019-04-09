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

    // console.log(projectDetails);
    // for (let index = 0; index < projectDetails.length; index++) {
    //   const element = projectDetails[index];
    //   console.log(element['projects'])
      
    // }

return (
  projectDetails.map((projectDetailsMapped => (
       <div
        key={projectDetailsMapped.id}
        className="col-xs-12 col-sm-6 col-md-4 col-lg-4"
       >
        {
          projectDetailsMapped['projects'].map((singleProject, i) => {
            return <div className = "cardProject cardWrapper bgLightPink textDark"
            // key={['projects']}
            >
                <div className = "cardProject--Img">
                <img className = "designerProject--Img" src = {singleProject.covers['max_808']}/>
                </div>
                
                <div className = "wrapperProject--Details">
                  <div className = "wrapper paraStyle--DesignerProject">
                    <p className = "textDark">{singleProject.name}</p>
                    <p className = "caption textDark">Views: {singleProject.stats.views}</p>
                  </div>
                </div>
              </div>
            })
          }
          </div>
          )
        )) 
      )
    }
  }






export default Projects;














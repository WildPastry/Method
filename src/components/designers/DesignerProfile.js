// IMPORT
import React, { Component } from "react";

var designerBar
    

// USER DATA
class DesignerProfile extends Component {

  constructor(props) {
		super(props);
		this.state = {
			currentDesignerProfile: "h3l"
		};
		this.testBar = this.testBar.bind(this);
  } 
  
  testBar(){
    this.setState({
      currentDesignerProfile: "washe"
    });
  }

  render() {
    
    console.log(this.props.designerProfileState.behanceData);
    console.log(this.state.currentDesignerProfile);

    if (this.state.currentDesignerProfile === "h3l"){
      designerBar = 4
    } else if (this.state.currentDesignerProfile === "washe"){
      designerBar = 0
    }


    return (
      <div className="container">
        <button onClick={this.testBar}>button</button>
        <div className="row bgLightPink">
              <div className="col-3 wrapperCol">
                <img src={this.props.designerProfileState.behanceData[designerBar].user.images[276]} alt="loading...." />
              </div>

              <div className="col-9">
                  <div className="designerAttributes wrapperCol textDark">
                      <h2><span className="designerDetails">{this.props.designerProfileState.behanceData[designerBar].user.username}</span></h2>
                  </div>
                  <div className="designerAttributes wrapperCol textDark">
                      <h5>Total Project Views: <span className="designerDetails">{this.props.designerProfileState.behanceData[designerBar].user.stats.views}</span></h5>
                  </div>
                  <div className="designerAttributes wrapperCol textDark">
                      <h5>Total Project Appreciations: <span className="designerDetails">{this.props.designerProfileState.behanceData[designerBar].user.stats.appreciations}</span></h5>
                  </div>
                  <div className="designerAttributes wrapperCol textLightDark">
                      <h5>Followers: <span className="designerDetails">{this.props.designerProfileState.behanceData[designerBar].user.stats.followers}</span></h5>
                  </div>
              </div>
          </div>



          <div className="row projectImageRow">
          
              {this.props.designerProfileState.behanceData[designerBar].projects.map(designerProfileImages => (<div className="wrapperCol col-xs-12 col-sm-6 col-md-4 col-lg-4"> <img className="projectImage" src={designerProfileImages.covers[404]} alt="loading..." />	</div>
							))}
							;
            
          </div>

          
          
        </div>
    );
  }
}

export default DesignerProfile;
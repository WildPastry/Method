// IMPORT
import React, { Component } from "react";

// USER DATA
class DesignerProfile extends Component {
  render() {
    console.log(this.props.designerProfileState.behanceData);
    // console.log(this.props.designerProfileState.behanceData[0].user.images[276]);


    return (
        <div>
         <div className="row">
          <div className="col-4">
            {/* <img src={this.props.designerProfileState.behanceData[0].user.images[276]} /> */}
          </div>
          <div>

          </div>
         </div>
        </div>
    );
  }
}

export default DesignerProfile;
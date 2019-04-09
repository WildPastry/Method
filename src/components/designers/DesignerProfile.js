// IMPORT
import React, { Component } from "react";

// USER DATA
class DesignerProfile extends Component {
  render() {
    console.log(this.props.designerProfileState.behanceData);
    // console.log(this.props.designerProfileState.behanceData[0].user.images[276]);
    // console.log(this.props.designerProfileState.behanceData[0].user.username);
    // console.log(this.props.designerProfileState.behanceData[4].user.stats.views);
    // console.log(this.props.designerProfileState.behanceData[4].user.stats.appreciations);
    // console.log(this.props.designerProfileState.behanceData[4].user.stats.followers);
    console.log(this.props.designerProfileState.behanceData[4].projects);


    return (
      <div className="container">
        <div className="row bgMethodBlack">
              <div className="col-3 wrapperCol">
                <img src={this.props.designerProfileState.behanceData[4].user.images[276]} alt="loading...." />
              </div>
              <div className="col-9">
                  <div className="designerAttributes wrapperCol textLightPink">
                      <h2>Name: <span className="designerDetails">{this.props.designerProfileState.behanceData[4].user.username}</span></h2>
                  </div>
                  <div className="designerAttributes wrapperCol textLightPink">
                      <h2>Total Project Views: <span className="designerDetails">{this.props.designerProfileState.behanceData[4].user.stats.views}</span></h2>
                  </div>
                  <div className="designerAttributes wrapperCol textLightPink">
                      <h2>Total Project Appreciations: <span className="designerDetails">{this.props.designerProfileState.behanceData[4].user.stats.appreciations}</span></h2>
                  </div>
                  <div className="designerAttributes wrapperCol textLightPink">
                      <h2>Followers: <span className="designerDetails">{this.props.designerProfileState.behanceData[4].user.stats.followers}</span></h2>
                  </div>
              </div>
          </div>
          <div className="row projectImageRow">
            <div className="col-4">
              <div className="projectContainer">
                <img className="projectImage" src={this.props.designerProfileState.behanceData[4].projects[0].covers[404]} alt="loading..."/>
              </div>
            </div>
            <div className="col-4">
              <div className="projectContainer">
                <img className="projectImage" src={this.props.designerProfileState.behanceData[4].projects[1].covers[404]} alt="loading..."/>
              </div>
            </div>
            <div className="col-4">
              <div className="projectContainer">
                <img className="projectImage" src={this.props.designerProfileState.behanceData[4].projects[2].covers[404]} alt="loading..."/>
              </div>
            </div>
          </div>

          <div className="row projectImageRow">
            <div className="col-4">
              <div className="projectContainer">
                <img className="projectImage" src={this.props.designerProfileState.behanceData[4].projects[3].covers[808]} alt="loading..."/>
              </div>
            </div>
            <div className="col-4">
              <div className="projectContainer">
                <img className="projectImage" src={this.props.designerProfileState.behanceData[4].projects[4].covers[404]} alt="loading..."/>
              </div>
            </div>
            <div className="col-4">
              <div className="projectContainer">
                <img className="projectImage" src={this.props.designerProfileState.behanceData[4].projects[5].covers[404]} alt="loading..."/>
              </div>
            </div>
          </div>

          <div className="row projectImageRow">
            <div className="col-4">
              <div className="projectContainer">
                <img className="projectImage" src={this.props.designerProfileState.behanceData[4].projects[6].covers[808]} alt="loading..."/>
              </div>
            </div>
            <div className="col-4">
              <div className="projectContainer">
                <img className="projectImage" src={this.props.designerProfileState.behanceData[4].projects[7].covers[404]} alt="loading..."/>
              </div>
            </div>
            <div className="col-4">
              <div className="projectContainer">
                <img className="projectImage" src={this.props.designerProfileState.behanceData[4].projects[8].covers[404]} alt="loading..."/>
              </div>
            </div>
          </div>

          <div className="row projectImageRow">
            <div className="col-4">
              <div className="projectContainer">
                <img className="projectImage" src={this.props.designerProfileState.behanceData[4].projects[9].covers[404]} alt="loading..."/>
              </div>
            </div>

          </div>

          
        </div>
    );
  }
}

export default DesignerProfile;
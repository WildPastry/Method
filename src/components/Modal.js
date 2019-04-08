// IMPORT
import React, { Component } from "react";

// USER DATA
class Modal extends Component {
  render() {
    console.log("Modal Component");
    return (
        <div className={this.props.modalState.cardClass}>
          <h5 className={this.props.modalState.hClass}>Modal</h5>
        </div>
    );
  }
}

export default Modal;
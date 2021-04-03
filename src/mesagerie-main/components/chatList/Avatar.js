import React, { Component } from "react";
import image from "../../images/logo.png";
export default class Avatar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="avatar">
        <div className="avatar-img">
          <img src={image} alt="#" />
          {/* <img src={this.props.image} alt="#" /> c'est ce qu'il y avait avant*/}
        </div>
        <span className={`isOnline ${this.props.isOnline}`}></span>
      </div>
    );
  }
}

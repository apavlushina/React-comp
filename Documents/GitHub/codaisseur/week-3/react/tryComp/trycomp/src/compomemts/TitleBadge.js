import React, { Component } from "react";

export default class TitleBadge extends Component {
  render() {
    return (
      <div className="title-badge">
        <div>{this.props.content}</div>
      </div>
    );
  }
}

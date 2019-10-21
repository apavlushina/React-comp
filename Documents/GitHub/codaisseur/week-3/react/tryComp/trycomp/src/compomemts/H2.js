import React, { Component } from "react";

export default class H2 extends Component {
  render() {
    return (
      <h2>
        <div className="component-title ">{this.props.content}</div>
      </h2>
    );
  }
}

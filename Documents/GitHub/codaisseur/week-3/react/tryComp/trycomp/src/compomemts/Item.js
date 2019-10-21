import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="item team">
        <img className="image" src={this.props.link} style={this.props.style} />
        <div className="component-title title">{this.props.title}</div>
      </div>
    );
  }
}

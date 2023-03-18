// These two containers are siblings in the DOM
import React, { Component }  from "react";
import ChildPortal from "./ChildPortal";
import DispatcherPortal from "./DispatcherPortal";

class ParentPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM.
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <DispatcherPortal>
          <ChildPortal />
        </DispatcherPortal>
      </div>
    );
  }
}


export default ParentPortal;
import React from "react";

export default function Hover() {
  var HoverTest = React.createClass({
    getInitialState: function() {
      return {
        hover: false
      };
    },
    hoverOn: function() {
      this.setState({ hover: true });
    },
    hoverOff: function() {
      this.setState({ hover: false });
    },
    render: function() {
      return (
        <i
          className={
            this.state.hover ? "dropbtn dropdown" : "dropbtn show dropdown"
          }
          onMouseEnter={this.hoverOn}
          onMouseLeave={this.hoverOff}
        >
          {" "}
          My class is:{" "}
          {this.state.hover ? "dropbtn dropdown" : "dropbtn SHOW dropdown"}
        </i>
      );
    }
  });
  return (
    <div>
      <HoverTest />
    </div>
  );
}

import React from "react";

import "./RainbowFrame.css";

class RainbowFrame extends React.Component {
 
  render() {
    let jsxReturn=<div className="startDiv">{this.props.children}</div>;
    this.props.colors.forEach(color=>{
      jsxReturn=<div className='frameDiv' style={{ borderColor: color }}>{jsxReturn}</div>;
    })

    return (
      <div>{jsxReturn}</div>
    );
  }
}
export default RainbowFrame;

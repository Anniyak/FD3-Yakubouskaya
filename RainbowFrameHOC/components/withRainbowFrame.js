import React from "react";

import "./withRainbowFrame.css";

function withRainbowFrame(colors) {
  return function (Comp) {
    return (props) => {
      let jsxReturn = <Comp {...props} />;
      colors.forEach((color) => {
        jsxReturn = (
          <div className="frameDiv" style={{ borderColor: color }}>
            {jsxReturn}
          </div>
        );
      });
      return <div>{jsxReturn}</div>;
    };
  };
}
export default withRainbowFrame;

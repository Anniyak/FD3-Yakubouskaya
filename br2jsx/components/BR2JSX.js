import React from "react";

import "./BR2JSX.css";

class BR2JSX extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.props.text }}></div>;
  }
}
export default BR2JSX;

import React from "react";

import "./GoodRow.css";

class GoodRow extends React.Component {
  checkRow = () => {
    this.props.checkRow(this.props.index);
  };
  deleteRow = (eo) => {
    if (confirm('Точно хотите удалить '+this.props.productName+'?'))
      this.props.deleteRow(this.props.index);
    eo.stopPropagation();
  };
  render() {
    return (
      <tr onClick={this.checkRow} className={this.props.checked == true ? "checkedRow" : ""}>
        <td className="productName">{this.props.productName}</td>
        <td>
          <img src={this.props.pictureUrl} alt={this.props.productName} />
        </td>
        <td>{this.props.price}</td>
        <td>{this.props.quantity}</td>
        <td>
          <input type="button" value={"Удалить"} onClick={this.deleteRow} />
        </td>
      </tr>
    );
  }
}

export default GoodRow;

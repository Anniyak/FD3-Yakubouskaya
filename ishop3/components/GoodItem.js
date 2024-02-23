import React from "react";

import "./GoodItem.css";

class GoodItem extends React.Component {
  checkItem = () => {
    this.props.checkItem(this.props.index);
  };
  deleteItem = (eo) => {
    eo.stopPropagation();
    if (confirm("Точно хотите удалить " + this.props.productName + "?"))
      this.props.deleteItem(this.props.index);
  };
  editItem = (eo) => {
    eo.stopPropagation();
    this.props.editItem(this.props.index);
  };
  render() {
    return (
      <tr
        onClick={this.checkItem}
        className={this.props.checked == true ? "checkedItem" : ""}
      >
        <td className="productName">{this.props.productName}</td>
        <td>
          <img src={this.props.pictureUrl} alt={this.props.productName} />
        </td>
        <td>{this.props.price}</td>
        <td>{this.props.quantity}</td>
        <td>
          <input
            type="button"
            value={"Редактировать"}
            onClick={this.editItem}
            disabled={this.props.disableBtn}
          />
          <input
            type="button"
            value={"Удалить"}
            onClick={this.deleteItem}
            disabled={this.props.disableBtn}
          />
        </td>
      </tr>
    );
  }
}

export default GoodItem;

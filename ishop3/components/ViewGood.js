import React from "react";

import "./ViewGood.css";

class ViewGood extends React.Component {
  render() {
    return (
        <div >
            <div className="viewTitle">{this.props.checkedItem.productName}</div>
            <div>Цена: <span className="productData" >{this.props.checkedItem.price}</span></div>
            <div>Количество: <span className="productData" >{this.props.checkedItem.quantity}</span></div>
            <div>Изображение: <img className="productImg" src={this.props.checkedItem.pictureUrl} alt={this.props.checkedItem.productName} /></div>
      
      </div>
    );
  }
}

export default ViewGood;

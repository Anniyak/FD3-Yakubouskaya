import React from "react";

import "./GoodsBlock.css";
import GoodItem from "./GoodItem";

class GoodsBlock extends React.Component {
  state = {
    checkedItemKey:
      this.props.goods.length > 0 ? this.props.goods[0].key : null,
    goods: this.props.goods,
  };

  checkItem = (key) => {
    this.setState({ checkedItemKey: key });
  };
  deleteItem = (key) => {
    const goods = this.state.goods.filter((item) => item.key != key);
    //переопределение выделенного если удалили текущий
    if (this.state.checkedItemKey == key)
      this.setState({ checkedItemKey: goods.length > 0 ? goods[0].key : null });
    this.setState({ goods: goods });
  };
  render() {
    const goodsCode = this.state.goods.map((v, i) => (
      <GoodItem
        key={v.key}
        index={v.key}
        checked={this.state.checkedItemKey == v.key}
        productName={v.productName}
        price={v.price}
        quantity={v.quantity}
        pictureUrl={v.pictureUrl}
        checkItem={this.checkItem}
        deleteItem={this.deleteItem}
      />
    ));

    return (
      <table className="GoodsBlock">
        <caption>Товары магазина {this.props.storeName}</caption>
        <thead>
          <tr>
            <th>Название</th>
            <th>Изображение</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Управление</th>
          </tr>
        </thead>
        <tbody>{goodsCode}</tbody>
      </table>
    );
  }
}

export default GoodsBlock;

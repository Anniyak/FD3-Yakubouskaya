import React from "react";

import "./GoodsBlock.css";
import GoodItem from "./GoodItem";
import ViewGood from "./ViewGood";
import EditGood from "./EditGood";
const modelState = {
  view: 0,
  edit: 1,
  add: 2,
};

class GoodsBlock extends React.Component {
  state = {
    checkedItemKey:
      this.props.goods.length > 0 ? this.props.goods[0].key : null,
    goods: this.props.goods,
    checkedItem: this.props.goods.length > 0 ? this.props.goods[0] : null,
    modelState: modelState.view,
  };

  checkItem = (key) => {
    this.setState({ checkedItemKey: key });
    this.setState({
      checkedItem: this.state.goods.filter((item) => item.key == key)[0],
    });
  };
  deleteItem = (key) => {
    const goods = this.state.goods.filter((item) => item.key != key);
    //переопределение выделенного если удалили текущий
    if (this.state.checkedItemKey == key)
      this.setState({ checkedItemKey: goods.length > 0 ? goods[0].key : null });
    this.setState({ goods: goods });
  };
  editItem = (key) => {
    this.setState({ checkedItemKey: key });
    this.setState({
      checkedItem: this.state.goods.filter((item) => item.key == key)[0],
    });
    this.setState({ modelState: modelState.edit });
  };
  cancelEdit = () => {
    this.setState({ modelState: modelState.view });
  };
  saveEdit = (obj) => {
    this.setState({ modelState: modelState.view });
    if (this.state.modelState == modelState.edit) {
      let currItem =this.state.goods.filter((item) => item.key == obj.key)[0];
      currItem.productName = obj.productName;
      currItem.price = obj.price;
      currItem.pictureUrl = obj.pictureUrl;
      currItem.quantity = obj.quantity;
      this.setState({ checkedItem: currItem });
    } else {
      //добавление
      this.state.goods.push(obj);
      this.setState({ checkedItemKey: obj.key });
      this.setState({ goods: goods });
    }
  };
  addItem = () => {
    let newKey = this.getRandomInt(this.state.goods.length + 20);
    while (
      this.state.goods.filter((item) => item.key == newKey).length > 0 ||
      newKey < 1
    ) {
      newKey = this.getRandomInt(this.state.goods.length + 20);
    }
    let newGood = {
      key: newKey,
      productName: "",
      price: "",
      pictureUrl: "",
      quantity: "",
    };
    this.setState({ modelState: modelState.add });
    this.setState({ checkedItem: newGood });
  };
  getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
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
        editItem={this.editItem}
      />
    ));
    const addButton =
      this.state.modelState == modelState.view ? (
        <input type="button" value="Добавить" onClick={this.addItem} />
      ) : (
        ""
      );
    const buttomBlock =
      this.state.modelState == modelState.view ? (
        <ViewGood checkedItem={this.state.checkedItem}></ViewGood>
      ) : (
        <EditGood
          stateModel={this.state.modelState}
          currentItem={this.state.checkedItem}
          cancelEdit={this.cancelEdit}
          saveEdit={this.saveEdit}
        ></EditGood>
      );

    return (
      <div>
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
        {addButton}
        {buttomBlock}
      </div>
    );
  }
}

export default GoodsBlock;

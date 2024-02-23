import React from "react";

import "./EditGood.css";
const modelState = {
  view: 0,
  edit: 1,
  add: 2,
};

class EditGood extends React.Component {
  state = {
    id: this.props.currentItem.key || "",
    goodName: this.props.currentItem.productName || "",
    goodPrice: this.props.currentItem.price || "",
    goodPictureUrl: this.props.currentItem.pictureUrl || "",
    goodQuantity: this.props.currentItem.quantity || "",
  };

  changeName = (eo) => {
    const newName = eo.target.value;
    this.setState({ goodName: newName });
  };
  changePrice = (eo) => {
    const newPrice = eo.target.value;
    this.setState({ goodPrice: newPrice });
  };
  changePictureUrl = (eo) => {
    const newPictureUrl = eo.target.value;
    this.setState({ goodPictureUrl: newPictureUrl });
  };
  changeQuantity = (eo) => {
    const newQuantity = eo.target.value;
    this.setState({ goodQuantity: newQuantity });
  };
  save = () => {
    this.props.saveEdit({
      key: this.state.id,
      productName: this.state.goodName,
      price: this.state.goodPrice,
      pictureUrl: this.state.goodPictureUrl,
      quantity: this.state.goodQuantity,
    });
  };
  cancel = () => {
    this.props.cancelEdit();
  };

  doNothing = () => {};

  render() {
    const title = (
      <div className="editTitle">
        {this.props.stateModel == modelState.edit
          ? "Редактирование "
          : "Добавление "}
        продукта
      </div>
    );

    return (
      <div>
        {title}
        <div className="productField">ID: {this.state.id}</div>
        <div className="productField">
          <div className="label">Название:</div>
          <input
            type="text"
            value={this.state.goodName}
            onChange={this.changeName}
          />
        </div>
        <div className="productField">
          <div className="label">Цена:</div>
          <input
            type="text"
            value={this.state.goodPrice}
            onChange={this.changePrice}
          />
        </div>
        <div className="productField">
          <div className="label">Ссылка на изображение:</div>
          <input
            type="text"
            value={this.state.goodPictureUrl}
            onChange={this.changePictureUrl}
          />
        </div>
        <div className="productField">
          <div className="label">Количество:</div>
          <input
            type="text"
            value={this.state.goodQuantity}
            onChange={this.changeQuantity}
          />
        </div>
        <input type="button" value="Сохранить" onClick={this.save} />
        <input type="button" value="Отмена" onClick={this.cancel} />
      </div>
    );
  }
}
export default EditGood;

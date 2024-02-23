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
    nameValid: true,
    priceValid: true,
    pictureUrlValid: true,
    quantityValid: true,
  };

  changeName = (eo) => {
    const newName = eo.target.value;
    this.setState({ goodName: newName });
    this.setState({
      nameValid: this.checkText(newName),
    });
  };
  changePrice = (eo) => {
    const newPrice = eo.target.value;
    this.setState({ goodPrice: newPrice });
    this.setState({
      priceValid: this.checkRationalNumber(newPrice),
    });
  };
  changePictureUrl = (eo) => {
    const newPictureUrl = eo.target.value;
    this.setState({ goodPictureUrl: newPictureUrl });
    this.setState({
      pictureUrlValid: this.checkPictureUrl(newPictureUrl),
    });
  };
  changeQuantity = (eo) => {
    const newQuantity = eo.target.value;
    this.setState({ goodQuantity: newQuantity });
    this.setState({
      quantityValid: this.checkPositiveInteger(newQuantity),
    });
  };
  componentDidMount = () => {
    this.setState({
      nameValid: this.checkText(this.state.goodName),
      priceValid: this.checkRationalNumber(this.state.goodPrice),
      pictureUrlValid: this.checkPictureUrl(this.state.goodPictureUrl),
      quantityValid: this.checkPositiveInteger(this.state.goodQuantity),
    });
  };
  checkText = (text) => {
    return text && text.length > 0;
  };
  checkRationalNumber = (num) => {
    return num > 0;
  };
  checkPositiveInteger = (num) => {
    return num > 0 && Number.isInteger(+num);
  };
  checkPictureUrl = (url) => {
    var objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
    return objRE.test(url);
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
            required
          />

          <span
            className="errorText"
            style={{ display: !this.state.nameValid ? "inline" : "none" }}
          >
            Заполните поле. Значение должно быть строкой
          </span>
        </div>
        <div className="productField">
          <div className="label">Цена:</div>
          <input
            type="number"
            value={this.state.goodPrice}
            onChange={this.changePrice}
            required
          />
          <span
            className="errorText"
            style={{ display: !this.state.priceValid ? "inline" : "none" }}
          >
            Заполните поле. Значение должно рациональным положительным числом
          </span>
        </div>
        <div className="productField">
          <div className="label">Ссылка на изображение:</div>
          <input
            type="url"
            value={this.state.goodPictureUrl}
            onChange={this.changePictureUrl}
            required
          />
          <span
            className="errorText"
            style={{ display: !this.state.pictureUrlValid ? "inline" : "none" }}
          >
            Заполните поле. Значение должно быть валидной ссылкой
          </span>
        </div>
        <div className="productField">
          <div className="label">Количество:</div>
          <input
            type="number"
            value={this.state.goodQuantity}
            onChange={this.changeQuantity}
            required
          />
          <span
            className="errorText"
            style={{ display: !this.state.quantityValid ? "inline" : "none" }}
          >
            Заполните поле. Значение должно быть положительным целым числом
          </span>
        </div>
        <input
          type="button"
          value="Сохранить"
          onClick={this.save}
          disabled={
            !this.state.nameValid ||
            !this.state.priceValid ||
            !this.state.pictureUrlValid ||
            !this.state.quantityValid
          }
        />
        <input type="button" value="Отмена" onClick={this.cancel} />
      </div>
    );
  }
}
export default EditGood;

import React from "react";

import "./GoodsBlock.css";
import GoodRow from "./GoodRow";

class GoodsBlock extends React.Component {
 
  state = {
    checkedRowKey: this.props.goods.length>0? this.props.goods[0].key:null,
    goods:this.props.goods
  };

  checkRow = (key) => {
    this.setState({ checkedRowKey: key });
  };
  deleteRow = (key) => {
    const goods=JSON.parse(JSON.stringify(this.state.goods)).filter(item=>item.key!=key);

    let newkey=this.state.checkedRowKey!=key?this.state.checkedRowKey:(goods.length>0? goods[0].key:null)
 
   
    this.setState({ checkedRowKey:  newkey});
       this.setState({ goods: goods});
  };
  render() {
    const goodsCode = this.state.goods.map((v, i) => (
      <GoodRow
        key={v.key}
        index={v.key}
        checked={this.state.checkedRowKey == v.key}
        productName={v.productName}
        price={v.price}
        quantity={v.quantity}
        pictureUrl={v.pictureUrl}
        checkRow={this.checkRow}
        deleteRow={this.deleteRow}
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

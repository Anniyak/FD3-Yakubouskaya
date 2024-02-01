import React from 'react';

import './GoodsBlock.css';
import GoodRow from './GoodRow';

class GoodsBlock extends React.Component {

  render() {

    const goodsCode=this.props.goods.map( (v,i) =>
      <GoodRow key={i} index={i+1} productName={v.productName} price={v.price} quantity={v.quantity} pictureUrl={v.pictureUrl} code={v.code} />
    );

    return (
        <table className='GoodsBlock'>
            <caption>Товары магазина {this.props.storeName}</caption>
            <thead>
            <tr>
                <th>№</th>
                <th>Название</th>
                <th>Изображение</th>
                <th>Цена</th>
                <th>Количество</th>
            </tr>
            </thead>
            <tbody>
                {goodsCode}
            </tbody>            
        </table>
    );
  }
}

export default GoodsBlock;

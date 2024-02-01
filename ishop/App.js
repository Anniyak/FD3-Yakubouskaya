import React from 'react';
import ReactDOM from 'react-dom';

import GoodsBlock from './components/GoodsBlock';

import goodsArr from './goods.json'
console.log(goodsArr);

ReactDOM.render(
  <GoodsBlock 
    goods={goodsArr}
  />
  , document.getElementById('container') 
);

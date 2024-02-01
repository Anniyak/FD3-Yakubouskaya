import React from 'react';
import ReactDOM from 'react-dom';

import GoodsBlock from './components/GoodsBlock';

import goodsArr from './goods.json'
const storeName='21vek';

ReactDOM.render(
  <GoodsBlock 
    storeName={storeName}
    goods={goodsArr}
  />
  , document.getElementById('container') 
);

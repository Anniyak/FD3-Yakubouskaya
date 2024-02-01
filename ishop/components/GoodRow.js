import React from 'react';

import './GoodRow.css';

class GoodRow extends React.Component {

  render() {
console.log(this.props.pictureUrl);
    return (
        <tr>
                <td>{this.props.index}</td>
                <td className='productName'>{this.props.productName}</td>
                <td><img src={this.props.pictureUrl} alt={this.props.productName}/></td>
                <td>{this.props.price}</td>
                <td>{this.props.quantity}</td>
            </tr>
    );

  }

}

export default GoodRow;

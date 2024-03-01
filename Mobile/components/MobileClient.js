import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  // static propTypes = {
  //   id: PropTypes.number.isRequired,
  //   FIO:PropTypes.shape({
  //     fam: PropTypes.string.isRequired,
  //     im: PropTypes.string.isRequired,
  //     otch: PropTypes.string.isRequired,
  //   }),
  //   balance: PropTypes.number.isRequired,
  // };
  clientMode={
    view:1,
    edit:2
  }
  state={
    mode:this.clientMode.view
  }

  render() {

    console.log("MobileClient id="+this.props.client.id+" render");
    
    return (
      <tr >
      <td>{this.props.client.fam}</td>
      <td>{this.props.client.im}</td>
      <td>{this.props.client.otch}</td>
      <td>{this.props.client.balance}</td>
      <td className={this.props.client.balance>=0?"active":"blocked"}>{this.props.client.balance>=0?"active":"blocked"}</td>
      <td> <input type="button" value="Редактировать" onClick={this.edit} /></td>
      <td><input type="button" value="Удалить" onClick={this.delete} /></td>
    </tr>
    );

  }

}

export default MobileClient;

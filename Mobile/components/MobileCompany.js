import React from "react";
import PropTypes from "prop-types";

import MobileClient from "./MobileClient";

import "./MobileCompany.css";

class MobileCompany extends React.PureComponent {
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   clients: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //       fam: PropTypes.string.isRequired,
  //       im: PropTypes.string.isRequired,
  //       otch: PropTypes.string.isRequired,
  //       balance: PropTypes.number.isRequired,
  //     })
  //   ),
  // };

  state = {
    clients: this.props.clients,
  };



  setBalance = (clientId, newBalance) => {
    let changed = false;
    let newClients = [...this.state.clients]; // копия самого массива клиентов
    newClients.forEach((c, i) => {
      if (c.id == clientId && c.balance != newBalance) {
        let newClient = { ...c }; // копия объекта изменившегося клиента
        newClient.balance = newBalance;
        newClients[i] = newClient;
        changed = true;
      }
    });
    if (changed) this.setState({ clients: newClients });
  };



  render() {
    console.log("MobileCompany render");

    const clientsCode = this.state.clients.map((client) => {
      return <MobileClient client={client} key={client.id} />;
    });

    return (
      <table className="MobileCompany">
        <thead>
          <tr>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Баланс</th>
            <th>Статус</th>
            <th>Редактировать</th>
            <th>Удалить</th>
          </tr>
        </thead>

        <tbody>{clientsCode}</tbody>
      </table>
    );
  }
}

export default MobileCompany;

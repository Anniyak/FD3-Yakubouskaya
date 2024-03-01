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
  filterType = {
    all: 0,
    active: 1,
    blocked: 2,
  };

  state = {
    clients: this.props.clients,
    filter: this.filterType.all,
  };
  showAll = () => {
    this.setState({ filter: this.filterType.all });
  };
  showActive = () => {
    this.setState({ filter: this.filterType.active });
  };
  showBlocked = () => {
    this.setState({ filter: this.filterType.blocked });
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

    let filteredClients = [];
    switch (this.state.filter) {
      case this.filterType.all: {
        filteredClients = this.state.clients;
        break;
      }
      case this.filterType.active: {
        filteredClients = this.state.clients.filter(
          (client) => client.balance >= 0
        );
        break;
      }
      default: {
        filteredClients = this.state.clients.filter(
          (client) => client.balance < 0
        );
        break;
      }
    }

    const clientsCode = filteredClients.map((client) => {
      return <MobileClient client={client} key={client.id} />;
    });

    return (
      <div>
        <input type="button" value=" Все" onClick={this.showAll} />
        <input type="button" value="Активные" onClick={this.showActive} />
        <input
          type="button"
          value="Заблокированные"
          onClick={this.showBlocked}
        />
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
      </div>
    );
  }
}

export default MobileCompany;

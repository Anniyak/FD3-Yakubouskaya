import React from "react";
import { clientEvents } from "./events";
import MobileClient from "./MobileClient";

import "./MobileCompany.css";

class MobileCompany extends React.PureComponent {
  
  filterType = {
    all: 0,
    active: 1,
    blocked: 2,
  };

  state = {
    clients: this.props.clients,
    filter: this.filterType.all,
  };
  componentDidMount = () => {
    clientEvents.addListener("save", this.save);
    clientEvents.addListener("delete", this.delete);
  };

  componentWillUnmount = () => {
    clientEvents.removeListener("save", this.save);
    clientEvents.removeListener("delete", this.delete);
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
  save = (th) => {
    let newClient = { ...th };
    let newClients = [];
    this.state.clients.forEach((cl) => {
      if (cl.id == newClient.id) newClients.push(newClient);
      else newClients.push(cl);
    });

    this.setState({ clients: newClients });
  };
  delete=(id)=>{
    let newClients = [];
    this.state.clients.forEach((cl) => {
      if (cl.id != id)  newClients.push(cl);
    });
    this.setState({ clients: newClients });
  }

  addClient = () => {
    let max = 0;
    this.state.clients.forEach((cl) => {
      if (cl.id > max) max = cl.id;
    });
    const newClient={
      id: max+1,
      fam: "",
      im: "",
      otch: "",
      balance: 0,
    }
    let newClientsList=[...this.state.clients,newClient];
    this.setState({ clients: newClientsList })
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
        <input
          type="button"
          value="Добавить клиента"
          onClick={this.addClient}
        />
      </div>
    );
  }
}

export default MobileCompany;

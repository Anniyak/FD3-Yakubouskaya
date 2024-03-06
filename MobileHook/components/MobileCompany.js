import React, { useState, useEffect } from "react";
import { clientEvents } from "./events";
import MobileClient from "./MobileClient";

import "./MobileCompany.css";

const MobileCompany = (props) => {
  const filterType = {
    all: 0,
    active: 1,
    blocked: 2,
  };
  const [clients, setClients] = useState(props.clients);
  const [filter, setFilter] = useState(filterType.all);

  useEffect(() => {
    clientEvents.addListener("save", save);
    clientEvents.addListener("delete", deleteClient);
    return () => {
      clientEvents.removeListener("save", save);
      clientEvents.removeListener("delete", dedeleteClientlete);
    };
  }, []);

  const showAll = () => {
    setFilter(filterType.all);
  };
  const showActive = () => {
    setFilter(filterType.active);
  };
  const showBlocked = () => {
    setFilter(filterType.blocked);
  };
  const save = (th) => {
    let newClient = { ...th };
    let newClients = [];
    let isUpgrade = false;
    clients.forEach((cl) => {
      if (cl.id == newClient.id) {
        newClients.push(newClient);
        isUpgrade = true;
      } else newClients.push(cl);
    });
    if (!isUpgrade) newClients.push(newClient);

    setClients(newClients);
  };
  const deleteClient = (id) => {
    let newClients = [];
    clients.forEach((cl) => {
      if (cl.id != id) newClients.push(cl);
    });
    setClients(newClients);
  };

  const addClient = () => {
    let max = 0;
    clients.forEach((cl) => {
      if (cl.id > max) max = cl.id;
    });
    const newClient = {
      id: max + 1,
      fam: "",
      im: "",
      otch: "",
      balance: 0,
    };
    let newClients = [...clients, newClient];
    setClients(newClients);
  };

  console.log("MobileCompany render");

  let filteredClients = [];
  switch (filter) {
    case filterType.all: {
      filteredClients = clients;
      break;
    }
    case filterType.active: {
      filteredClients = clients.filter((client) => client.balance >= 0);
      break;
    }
    default: {
      filteredClients = clients.filter((client) => client.balance < 0);
      break;
    }
  }

  const clientsCode = filteredClients.map((client) => {
    return <MobileClient client={client} key={client.id} />;
  });

  return (
    <div>
      <input type="button" value=" Все" onClick={showAll} />
      <input type="button" value="Активные" onClick={showActive} />
      <input type="button" value="Заблокированные" onClick={showBlocked} />
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
      <input type="button" value="Добавить клиента" onClick={addClient} />
    </div>
  );
};

export default MobileCompany;

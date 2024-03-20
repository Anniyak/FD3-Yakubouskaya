import React, { useState, useEffect } from "react";
import { clientEvents } from "./events";
import MobileClient from "./MobileClient";

import { useDispatch, useSelector } from "react-redux";

import "./MobileCompany.css";
import { saveClient, addClient, deleteClient } from "../redux/clientsSlice.js";

const MobileCompany = (props) => {
  const filterType = {
    all: 0,
    active: 1,
    blocked: 2,
  };
  //const [clients, setClients] = useState( useSelector( state => state.clients ));
  const [filter, setFilter] = useState(filterType.all);
  const clients = useSelector((state) => state.clients);
  const dispatch = useDispatch();

  useEffect(() => {
    clientEvents.addListener("save", save);
    clientEvents.addListener("delete", deleteCl);
    return () => {
      clientEvents.removeListener("save", save);
      clientEvents.removeListener("delete", deleteCl);
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
    dispatch(saveClient(th));
  };
  const deleteCl = (id) => {
    dispatch(deleteClient(id));
  };

  const add = () => {
    dispatch(addClient());
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
      <input type="button" value="Добавить клиента" onClick={add} />
    </div>
  );
};

export default MobileCompany;

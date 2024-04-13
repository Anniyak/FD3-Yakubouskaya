
import "./App.css";
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { PagesRouter } from "./routes/PagesRouter.js";
import { PageLinks } from "./components/PageLinks.tsx";
import { Calendar } from "./components/Calendar.tsx";
import data from './assets/db.json'
import { newId } from './scripts/helpers.ts'


import { EMPLOYEES } from "./scripts/constants.ts";


function App() {
  const [dataState, setDataState] = useState(data);
  const getDataList = (entityName) => {
    let result = dataState[entityName];
    return result;
  };
  const getDataById = (entityName, id) => {
    let result = dataState[entityName];
    if (id) result = result.filter((ent) => +ent.id === id);
    return result.length ? result[0] : null;
  };
  const setData = (entityName, newEntity) => {
    const currDataList = dataState[entityName];
    let newDataList = [];
    if (newEntity.id > 0) {
      let currIndex = currDataList.findIndex(ent => +ent.id === +newEntity.id);

      newDataList = [...currDataList]
      newDataList[currIndex] = newEntity;

    }
    else {
      newEntity.id = newId(currDataList);
      newDataList = [...currDataList, newEntity];
    }
    const newData = {
      ...dataState,
      [entityName]: newDataList
    }
    setDataState(newData);

  };
  const deleteData = (entityName, id) => {
    let currData = [...dataState[entityName]];
    let i = currData.findIndex(ent => ent.id == id);

    currData.splice(i, 1);
    const newData = {
      ...dataState,
      [entityName]: currData
    }
    setDataState(newData);

  }
  return (
    <BrowserRouter>
      <div>
        <div className='header'>
          <div className="leftHeader">
            <div className="title">Сотрудники</div>
            <PageLinks />
          </div>
          <Calendar calendarData={dataState[EMPLOYEES]} getDataList={getDataList} getDataById={getDataById} setData={setData} deleteData={deleteData} />
        </div>

        <PagesRouter data={dataState} getDataList={getDataList} getDataById={getDataById} setData={setData} deleteData={deleteData} />
      </div>
    </BrowserRouter>
  );
}

export default App;

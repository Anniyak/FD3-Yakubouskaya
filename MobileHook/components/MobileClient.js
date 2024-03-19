import React, { useState, useMemo } from "react";
import { clientEvents } from "./events";

import "./MobileClient.css";

const MobileClient = (props) => {
  const clientMode = {
    view: 1,
    edit: 2,
  };
  const [mode, setChecked] = useState(
    !(
      props.client.fam &&
      props.client.im &&
      props.client.otch &&
      props.client.balance
    )
      ? clientMode.edit
      : clientMode.view
  );

  let famRef = React.createRef();
  let imRef = React.createRef();
  let otchRef = React.createRef();
  let balanceRef = React.createRef();
  const edit = () => {
    setChecked(clientMode.edit);
  };
  const save = () => {
    clientEvents.emit("save", {
      id: props.client.id,
      fam: famRef.current.value,
      im: imRef.current.value,
      otch: otchRef.current.value,
      balance: balanceRef.current.value,
    });
    setChecked(clientMode.view);
  };
  const deleteClient = () => {
    clientEvents.emit("delete", props.client.id);
  };
  const cancel = () => {
    setChecked(clientMode.view);
  };

  
  const memoizeedRenderResult=useMemo(
    ()=>{
      console.log("MobileClient id =" + props.client.id + " render");
      return (
        <tr>
      <td>
        {mode == clientMode.view ? (
          props.client.fam
        ) : (
          <input type="text" defaultValue={props.client.fam} ref={famRef} />
        )}
      </td>
      <td>
        {mode == clientMode.view ? (
          props.client.im
        ) : (
          <input type="text" defaultValue={props.client.im} ref={imRef} />
        )}
      </td>
      <td>
        {mode == clientMode.view ? (
          props.client.otch
        ) : (
          <input type="text" defaultValue={props.client.otch} ref={otchRef} />
        )}
      </td>
      <td>
        {mode == clientMode.view ? (
          props.client.balance
        ) : (
          <input
            type="number"
            defaultValue={props.client.balance}
            ref={balanceRef}
          />
        )}
      </td>
      <td className={props.client.balance >= 0 ? "active" : "blocked"}>
        {props.client.balance >= 0 ? "active" : "blocked"}
      </td>
      <td>
        {mode == clientMode.view ? (
          <input type="button" value="Редактировать" onClick={edit} />
        ) : (
          <div>
            <input type="button" value="Сохранить" onClick={save} />
            <input type="button" value="Отменить" onClick={cancel} />
          </div>
        )}
      </td>
      <td>
        <input type="button" value="Удалить" onClick={deleteClient} />
      </td>
    </tr>
      )
    },
    [ props.client.fam, props.client.im, props.client.otch, props.client.balance, mode]   
  );

  return (
    memoizeedRenderResult
  );
};

export default MobileClient;

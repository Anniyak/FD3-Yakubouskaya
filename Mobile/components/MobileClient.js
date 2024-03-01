import React from "react";
import { clientEvents } from "./events";

import "./MobileClient.css";

class MobileClient extends React.PureComponent {

  clientMode = {
    view: 1,
    edit: 2,
  };
  state = {
    mode: !(
      this.props.client.fam &&
      this.props.client.im &&
      this.props.client.otch &&
      this.props.client.balance
    )
      ? this.clientMode.edit
      : this.clientMode.view,
  };

  famRef = React.createRef();
  imRef = React.createRef();
  otchRef = React.createRef();
  balanceRef = React.createRef();
  edit = () => {
    this.setState({ mode: this.clientMode.edit });
  };
  save = () => {
    clientEvents.emit("save", {
      id: this.props.client.id,
      fam: this.famRef.current.value,
      im: this.imRef.current.value,
      otch: this.otchRef.current.value,
      balance: this.balanceRef.current.value,
    });
    this.setState({ mode: this.clientMode.view });
  };
  delete = () => {
    clientEvents.emit("delete", this.props.client.id);
  };
  cancel = () => {
    this.setState({ mode: this.clientMode.view });
  };
  render() {
    console.log("MobileClient id=" + this.props.client.id + " render");

    return (
      <tr>
        <td>
          {this.state.mode == this.clientMode.view ? (
            this.props.client.fam
          ) : (
            <input
              type="text"
              defaultValue={this.props.client.fam}
              ref={this.famRef}
            />
          )}
        </td>
        <td>
          {this.state.mode == this.clientMode.view ? (
            this.props.client.im
          ) : (
            <input
              type="text"
              defaultValue={this.props.client.im}
              ref={this.imRef}
            />
          )}
        </td>
        <td>
          {this.state.mode == this.clientMode.view ? (
            this.props.client.otch
          ) : (
            <input
              type="text"
              defaultValue={this.props.client.otch}
              ref={this.otchRef}
            />
          )}
        </td>
        <td>
          {this.state.mode == this.clientMode.view ? (
            this.props.client.balance
          ) : (
            <input
              type="number"
              defaultValue={this.props.client.balance}
              ref={this.balanceRef}
            />
          )}
        </td>
        <td className={this.props.client.balance >= 0 ? "active" : "blocked"}>
          {this.props.client.balance >= 0 ? "active" : "blocked"}
        </td>
        <td>
          {this.state.mode == this.clientMode.view ? (
            <input type="button" value="Редактировать" onClick={this.edit} />
          ) : (
            <div>
              <input type="button" value="Сохранить" onClick={this.save} />
              <input type="button" value="Отменить" onClick={this.cancel} />
            </div>
          )}
        </td>
        <td>
          <input type="button" value="Удалить" onClick={this.delete} />
        </td>
      </tr>
    );
  }
}

export default MobileClient;

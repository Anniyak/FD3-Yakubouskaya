import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import MobileCompany from "./components/MobileCompany";

let companyName = "A1";

ReactDOM.render(
  <Provider store={store}>
    <MobileCompany name={companyName} />
  </Provider>,
  document.getElementById("container")
);

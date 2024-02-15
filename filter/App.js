import React from "react";
import ReactDOM from "react-dom";

import Filter from "./components/FilterList";

const wordsList = [
  "california",
  "everything",
  "aboveboard",
  "washington",
  "basketball",
  "weathering",
  "characters",
  "literature",
  "contraband",
  "appreciate",
];

ReactDOM.render(
  <Filter wordsList={wordsList} />,
  document.getElementById("container")
);

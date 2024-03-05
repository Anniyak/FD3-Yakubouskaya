import React from "react";

import "./ControlMenu.css";

const ControlMenu = (props) => {
  const cleanSettings = () => {
    props.cleanSettings();
  };

  const applySort = (eo) => {
    props.applySort(eo.target.checked);
  };

  const applyFilter = (eo) => {
    props.applyFilter(eo.target.value);
  };

  return (
    <div className="controls">
      <input
        type="checkbox"
        checked={props.sortedChecked}
        onChange={applySort}
      />
      <input type="text" value={props.filterString} onChange={applyFilter} />
      <input type="button" value="сброс" onClick={cleanSettings} />
    </div>
  );
};

export default ControlMenu;

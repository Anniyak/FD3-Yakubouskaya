import React, { useContext } from "react";
import "./ResultList.css";

import { StyleContext } from "../context/StyleContext";

const ResultList = (props) => {
  const currStyle = useContext(StyleContext);
  return (
    <span>
      <textarea
        className="wordsArea"
        value={props.wordsString}
        readOnly
        style={{ opacity: currStyle.opacity }}
      />
      <input
        className="contextBtn"
        type="button"
        value={"Увеличить прозрачность"}
        onClick={currStyle.changeOpacity}
      />
    </span>
  );
};

export default ResultList;

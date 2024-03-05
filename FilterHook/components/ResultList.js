import React from "react";
import "./ResultList.css";

const ResultList = (props) => {
  return <textarea className="wordsArea" value={props.wordsString} readOnly />;
};

export default ResultList;

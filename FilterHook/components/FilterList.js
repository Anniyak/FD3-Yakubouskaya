import React, { useEffect, useState } from "react";

import ResultList from "./ResultList";
import ControlMenu from "./ControlMenu";
import { StyleContext } from "../context/StyleContext";

const Filter = (props) => {
  const [sortedChecked, setChecked] = useState(false);
  const [filterString, setFilterString] = useState("");
  const [wordsString, setWordsString] = useState(props.wordsList.join("\n"));
  const incStyle = () => {
    setStyle((style) => ({
      ...style,
      opacity: style.opacity > 0.2 ? style.opacity - 0.1 : 1,
    }));
  };
  const [style, setStyle] = useState({ opacity: 1, changeOpacity: incStyle });

  const cleanSettings = () => {
    setChecked(false);
    setFilterString("");
    setWordsString(props.wordsList.join("\n"));
    setStyle((style) => ({ ...style, opacity: 1 }));
  };

  const applySort = (checked) => {
    setChecked(checked);
  };

  const applyFilter = (filterStr) => {
    setFilterString(filterStr);
  };

  useEffect(() => {
    let newList = props.wordsList.filter((item) => item.includes(filterString));
    if (sortedChecked) newList = newList.sort();
    setWordsString(newList.join("\n"));
  }, [sortedChecked, filterString]);

  return (
    <div>
      <ControlMenu
        sortedChecked={sortedChecked}
        filterString={filterString}
        applySort={applySort}
        applyFilter={applyFilter}
        cleanSettings={cleanSettings}
      />
      <StyleContext.Provider value={style}>
        <ResultList wordsString={wordsString} />
      </StyleContext.Provider>
    </div>
  );
};

export default Filter;

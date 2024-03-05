import React, { useEffect, useState } from "react";

import ResultList from "./ResultList";
import ControlMenu from "./ControlMenu";

const Filter = (props) => {
  const [sortedChecked, setChecked] = useState(false);
  const [filterString, setFilterString] = useState("");
  const [wordsString, setWordsString] = useState(props.wordsList.join("\n"));

  const cleanSettings = () => {
    setChecked(false);
    setFilterString("");
    setWordsString(props.wordsList.join("\n"));
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

      <ResultList wordsString={wordsString} />
    </div>
  );
};

export default Filter;

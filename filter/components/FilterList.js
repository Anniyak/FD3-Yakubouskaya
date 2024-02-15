import React from "react";

import "./FilterList.css";

class Filter extends React.Component {
  state = {
    sortedChecked: false,
    filterString: "",
    wordsString: this.props.wordsList.join("\n"),
  };

  cleanSettings = () => {
    this.setState({
      sortedChecked: false,
      filterString: "",
      wordsString: this.props.wordsList.join("\n"),
    });
  };

  applySort = (eo) => {
    const checked = eo.target.checked;
    this.setState({ sortedChecked: checked });
    this.applySettings(checked, this.state.filterString);
  };

  applyFilter = (eo) => {
    const filterStr = eo.target.value;
    this.setState({ filterString: filterStr });
    this.applySettings(this.state.sortedChecked, filterStr);
  };

  applySettings = (checked, filterStr) => {
    let newList = this.props.wordsList.filter((item) =>
      item.includes(filterStr)
    );
    if (checked) newList = newList.sort();
    this.setState({ wordsString: newList.join("\n") });
  };

  doNothing = () =>{

  }

  render() {
    return (
      <div>
        <div className="controls">
          <input
            type="checkbox"
            checked={this.state.sortedChecked}
            onChange={this.applySort}
          />
          <input
            type="text"
            value={this.state.filterString}
            onChange={this.applyFilter}
          />
          <input type="button" value="сброс" onClick={this.cleanSettings} />
        </div>

        <textarea className="wordsArea" value={this.state.wordsString} onChange={this.doNothing}/>
      </div>
    );
  }
}
export default Filter;

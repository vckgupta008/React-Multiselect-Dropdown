import React, { Component } from "react";
import update from "immutability-helper";
import "./multiSelectDropdown.css";

class MultiSelectDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      selectedList: [],
      showDropDown: false
    };
  }

  handleInputChange = e => {
    console.log(e.target.value);
    this.setState({
      input: e.target.value
    });
  };

  // _handleKeyDown = e => {
  //   if (e.key === "Enter") {
  //     const { selectedList } = this.state;
  //     this.setState({
  //       selectedList: update(selectedList, { $push: [this.state.input] }),
  //       input: ""
  //     });
  //   }
  // };

  removeOptions = item => {
    console.log(item);
    const { selectedList } = this.state;
    var index = selectedList.indexOf(item);
    if (index > -1) {
      selectedList.splice(index, 1);
    }
    this.setState({ selectedList });
  };

  handleOnFocus = () => {
    console.log("onFocus");
    this.setState({
      showDropDown: true
    });
  };
  handleOnBlur = e => {
    console.log("onBlur", e);
    // this.setState({
    //   showDropDown: false
    // });
  };

  handleSelectCheck = item => {
    const { selectedList } = this.state;
    var index = selectedList.indexOf(item);
    if (index > -1) {
      selectedList.splice(index, 1);
    } else {
      selectedList.push(item);
    }
    this.setState({ selectedList });
    console.log(selectedList);
  };

  render() {
    const { dropDownList, placeholder, showChips } = this.props;
    const { input, selectedList, showDropDown } = this.state;
    return (
      <div className="multiselect-container" onBlur={e => this.handleOnBlur(e)}>
        <div
          className="selected-chips-container"
          onFocus={() => this.handleOnFocus()}
        >
          {showChips ? (
            selectedList.map((item, index) => {
              return (
                <span className="selected-chips" key={index}>
                  {item}
                  <span
                    className="chip-close"
                    onClick={() => this.removeOptions(item)}
                  >
                    x
                  </span>
                </span>
              );
            })
          ) : selectedList.length ? (
            <span className="selected-chips">
              Selected {selectedList.length}
            </span>
          ) : (
            ""
          )}
          <span className="dropdown-input">
            <input
              type="text"
              onChange={this.handleInputChange}
              value={input}
              onKeyDown={this._handleKeyDown}
              placeholder={!selectedList.length ? placeholder : ""}
            />
          </span>
        </div>
        {showDropDown ? (
          <div className="dropdown-list" onFocus={() => this.handleOnFocus()}>
            {dropDownList.map((item, index) => {
              // debugger;
              if (
                (item &&
                  item.label &&
                  item.label.toLowerCase().includes(input.toLowerCase())) ||
                !input
              ) {
                return (
                  <label
                    className={`dropdown-options ${
                      selectedList.indexOf(item.value) > -1 ? "selected" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      key={index}
                      checked={selectedList.indexOf(item.value) > -1}
                      name={item.label}
                      value={item.value}
                      onClick={() => this.handleSelectCheck(item.value)}
                    />
                    {item.label}
                  </label>
                );
              }
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default MultiSelectDropdown;

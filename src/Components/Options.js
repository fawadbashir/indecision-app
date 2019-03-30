import React from "react";
import Option from "./Option";
import '../styles/componentStyles/_button.scss'
import '../styles/componentStyles/_widget.scss'

const Options = props => (
  <div>
  <div className = 'widget-header'>
  <h3 className = 'widget-header__title'>Your Options</h3>
    <button
    className = 'button button--link'
      onClick={props.handleDeleteOptions}
    >
      RemoveAll
    </button>
    </div>
    {props.options.length === 0 && <p className = 'widget__message'>Please add an Option to get Started</p>}
    {props.options.map((option,index) => (
      <Option
        key={option}
        optionText={option}
        count = {index + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;

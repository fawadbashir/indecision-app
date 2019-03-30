import React from "react";
import '../styles/componentStyles/_button.scss'

const Action = props => (
  <button className = 'big-button'
    onClick={props.handlePick}
    disabled={!props.hasOptions}
  >
    What should I do
  </button>
);

export default Action;

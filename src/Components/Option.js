import React from "react";
import '../styles/componentStyles/_option.scss'
import '../styles/componentStyles/_button.scss'

const Option = props => (
  <div className= 'option'>
  
      <p className = 'option__text'>{props.count} .{props.optionText}</p>
      <button
       className = 'button button--link'
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    
  </div>
);

export default Option;

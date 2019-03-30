import React from "react";
import Modal from "react-modal";
import '../styles/componentStyles/_modal.scss'
import '../styles/componentStyles/_button.scss'

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleSelectedOption}
    ContentLabel="selectedOption"
    className = 'modal'
  >
    <h3 className = 'modal__title'>Selected Option</h3>
    {props.selectedOption && <p className = 'modal__body'>{props.selectedOption}</p>}
    <button className = 'button' onClick={props.handleSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;

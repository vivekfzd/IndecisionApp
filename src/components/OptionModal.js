import React from 'react';
import Modal from 'react-Modal';

const OptionModal = (props) => (

    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button
            className="button"
            onClick={props.handleClearSelectedOption}
        >Okay</button>

    </Modal>
)

export default OptionModal
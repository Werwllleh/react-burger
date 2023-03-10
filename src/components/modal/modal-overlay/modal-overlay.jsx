import React from 'react';
import styles from './modal-overlay.module.css'
import PropTypes from "prop-types";

const ModalOverlay = ({onClose}) => {

    ModalOverlay.propTypes = {
        onClose: PropTypes.func.isRequired,
    };

    return (
        <div onClick={() => onClose()} className={styles.modal_overlay}>
        </div>
    );
};

export default ModalOverlay;
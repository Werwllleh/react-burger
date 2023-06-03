import React from 'react';
import styles from './modal-overlay.module.css'

interface ModalOverlayProps {
    onClose: () => void;
}

const ModalOverlay = ({onClose}: ModalOverlayProps): JSX.Element => {

    return (
        <div onClick={() => onClose()} className={styles.modal_overlay}>
        </div>
    );
};

export default ModalOverlay;
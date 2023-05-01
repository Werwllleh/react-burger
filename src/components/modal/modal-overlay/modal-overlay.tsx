import React, {FC} from 'react';
import styles from './modal-overlay.module.css'

interface ModalOverlayProps {
    onClose: () => void;
}

const ModalOverlay: FC<ModalOverlayProps> = ({onClose}) => {

    return (
        <div onClick={() => onClose()} className={styles.modal_overlay}>
        </div>
    );
};

export default ModalOverlay;
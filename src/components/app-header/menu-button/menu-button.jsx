import React from 'react';
import styles from './menu-button.module.css';

const MenuButton = ({icon, text}) => {


    const btnStyle = 'text text_type_main-default text_color_primary';

    return (
        <button htmltype={'button'}>
            <div className={styles.body}>
                {icon ? <div className={styles.icon}>{icon}</div> : null}
                <div className={btnStyle}>{text}</div>
            </div>
        </button>
    );
};

export default MenuButton;
import React from 'react';
import PropTypes from 'prop-types';
import styles from './menu-button.module.css';


const MenuButton = ({icon, text}) => {

    const btnStyle = 'text text_type_main-default text_color_primary';

    return (
        <a href='/#' className={styles.link}>
            <div className={styles.body}>
                {icon ? <div className={styles.icon}>{icon}</div> : null}
                <div className={btnStyle}>{text}</div>
            </div>
        </a>
    );
};

MenuButton.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string.isRequired
};

export default MenuButton;
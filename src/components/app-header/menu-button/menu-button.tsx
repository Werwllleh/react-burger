import React from 'react';
import PropTypes from 'prop-types';
import styles from './menu-button.module.css';
import {NavLink, useLocation} from "react-router-dom";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'


const MenuButton = ({icon, text, link}) => {

    console.log(icon)
    let b = null
    if ("burger-icon") b = <BurgerIcon type='secondary'/>
    const lll = useLocation()

    if (lll.pathname === link) {
        console.log(true)
    } else {
        console.log(false)
    }

    return (
        <NavLink to={link} className={({isActive}) =>
            isActive ? `${styles.link} ${styles.link_active}` : styles.link
        }>
            {icon ? <div className={styles.icon}>{b}</div> : null}
            <div className={'text text_type_main-default'}>{text}</div>
        </NavLink>
    );
};

MenuButton.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string.isRequired
};

export default MenuButton;
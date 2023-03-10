import React from 'react';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';
import MenuButton from "./menu-button/menu-button";


const AppHeader = () => {

    return (
        <header>
            <div className={styles.body}>
                <nav>
                    <MenuButton icon={<BurgerIcon />} text={'Конструктор'}/>
                    <MenuButton icon={<ListIcon/>} text={'Лента заказов'}/>
                </nav>
                <Logo/>
                <div className={styles.personal}>
                    <MenuButton icon={<ProfileIcon/>} text={'Личный кабинет'}/>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;
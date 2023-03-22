import React from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './tabs.module.css';
import {BUN, FILLINGS, SAUCE} from "../../../../utils/consts";


const Tabs = () => {

    return (
        <div className={styles.body}>
            <Tab value={BUN} active={true}>
                Булки
            </Tab>
            <Tab value={SAUCE} active={true}>
                Соусы
            </Tab>
            <Tab value={FILLINGS} active={true}>
                Начинки
            </Tab>
        </div>
    );
};

export default Tabs;
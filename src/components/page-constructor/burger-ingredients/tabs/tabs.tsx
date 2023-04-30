import React from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './tabs.module.css';
import {BUN, FILLINGS, SAUCE} from "../../../../utils/consts";


interface TabsProps {
    activeTab: string
}

const handleTabClick = (id: string) => {
    const element: HTMLElement | null = document.querySelector(`#${id}`);
    element?.scrollIntoView({
        behavior: "smooth"
    })
}

const Tabs = ({activeTab}:TabsProps): JSX.Element => {
    return (
        <div className={styles.body}>
            <Tab value={BUN} active={activeTab === BUN} onClick={() => handleTabClick(BUN)}>
                Булки
            </Tab>
            <Tab value={SAUCE} active={activeTab === SAUCE} onClick={() => handleTabClick(SAUCE)}>
                Соусы
            </Tab>
            <Tab value={FILLINGS} active={activeTab === FILLINGS} onClick={() => handleTabClick(FILLINGS)}>
                Начинки
            </Tab>
        </div>
    );
};

export default Tabs;
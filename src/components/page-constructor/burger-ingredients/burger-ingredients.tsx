import React, {useMemo, useRef, useState} from 'react';
import styles from './burger-ingredients.module.css';
import Tabs from "./tabs/tabs";
import Category from "./category/category";
import {BUN, FILLINGS, SAUCE} from "../../../utils/consts";
import Loader from "../../loader/loader";
import {IIngredient} from "../../../utils/types/types";
import {useAppSelector} from "../../../utils/hooks/redux-hooks";


const BurgerIngredients = (): JSX.Element => {

    const {isLoading, ingredients} = useAppSelector(state => state.ingredientsData)

    const buns = useMemo(() => {
        return ingredients.filter((cat:IIngredient) => cat.type === BUN);
    }, [ingredients]);

    const sauces = useMemo(() => {
        return ingredients.filter((cat:IIngredient) => cat.type === SAUCE);
    }, [ingredients]);

    const mains = useMemo(() => {
        return ingredients.filter((cat:IIngredient) => cat.type === FILLINGS);
    }, [ingredients]);

    const bunRef = useRef<HTMLDivElement | null>(null);
    const bunRect = bunRef?.current?.getBoundingClientRect();

    const saucesRef = useRef<HTMLDivElement | null>(null);
    const saucesRect = saucesRef?.current?.getBoundingClientRect();

    const mainsRef = useRef<HTMLDivElement | null>(null);
    const mainsRect = mainsRef?.current?.getBoundingClientRect();


    const [activeTab, setActiveTab] = useState(BUN)

    const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
        e.preventDefault();
        const scrollTop = e.currentTarget.scrollTop;
        if (bunRect && bunRect.height > scrollTop) {
            setActiveTab(BUN)
        } else if (saucesRect && saucesRect.height > scrollTop) {
            setActiveTab(SAUCE)
        } else if (mainsRect && mainsRect.height > scrollTop) {
            setActiveTab(FILLINGS)
        }
    }

    return (
        isLoading === false ? (
            <>
                <Tabs activeTab={activeTab}/>
                <div onScroll={handleScroll} className={styles.catList}>
                    <div ref={bunRef} id={BUN}><Category name={'Булки'} data={buns}/></div>
                    <div ref={saucesRef} id={SAUCE}><Category name={'Соусы'} data={sauces}/></div>
                    <div ref={mainsRef} id={FILLINGS}><Category name={'Начинки'} data={mains}/></div>
                </div>
            </>
        ) : (
            <div className={`${styles.loader}`}>
                <Loader/>
                <div className={`${styles.loader_text} text text_type_main-medium`}>Ингредиенты загружаются...</div>
            </div>
        )
    );
};

export default BurgerIngredients;
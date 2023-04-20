import React, {useMemo, useRef, useState} from 'react';
import styles from './burger-ingredients.module.css';
import Tabs from "./tabs/tabs";
import Category from "./category/category";
import {useSelector} from "react-redux";
import {BUN, FILLINGS, SAUCE} from "../../../utils/consts";
import Loader from "../../loader/loader";


const BurgerIngredients = () => {

    const {isLoading, ingredients} = useSelector(state => state.ingredientsReducer)

    const buns = useMemo(() => {
        return ingredients.filter(cat => cat.type === BUN);
    }, [ingredients]);

    const sauces = useMemo(() => {
        return ingredients.filter(cat => cat.type === SAUCE);
    }, [ingredients]);

    const mains = useMemo(() => {
        return ingredients.filter(cat => cat.type === FILLINGS);
    }, [ingredients]);

    const bunRef = useRef();
    const bunRect = bunRef?.current?.getBoundingClientRect();

    const saucesRef = useRef();
    const saucesRect = saucesRef?.current?.getBoundingClientRect();

    const mainsRef = useRef();
    const mainsRect = mainsRef?.current?.getBoundingClientRect();


    const [activeTab, setActiveTab] = useState(BUN)

    const handleScroll = (e) => {
        const scrollTop = e.currentTarget.scrollTop;
        if (bunRect?.height > scrollTop) {
            setActiveTab(BUN)
        } else if (saucesRect?.height > scrollTop) {
            setActiveTab(SAUCE)
        } else if (mainsRect?.height > scrollTop) {
            setActiveTab(FILLINGS)
        }
    }


    return (
        isLoading === false ? (
            <>
                <Tabs activeTab={activeTab}/>
                <div onScroll={handleScroll} className={styles.catList}>
                    <div ref={bunRef}><Category name={'Булки'} data={buns}/></div>
                    <div ref={saucesRef}><Category name={'Соусы'} data={sauces}/></div>
                    <div ref={mainsRef}><Category name={'Начинки'} data={mains}/></div>
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
import React, {useEffect} from 'react';
import styles from './feed.module.css';
import OrderList from "../../components/order-list/order-list";
import StatusBoard from "../../components/status-board/status-board";
import {useAppDispatch, useAppSelector} from "../../utils/hooks/redux-hooks";
import {connect} from "../../services/stores/action-creators";
import {ws_routes} from "../../utils/consts";

const Feed = () => {

    const dispatch = useAppDispatch();
    const generalOrdersData = useAppSelector(state => state.generalOrders.usersOrders)

    useEffect(() => {
        dispatch(connect(ws_routes.GET_GENERAL_ORDERS))
    }, [])

    return (
        <div className={'container'}>
            <section>
                <h1 className='text text_type_main-large mb-5'>Лента заказов</h1>
                <div className={styles.content}>
                    <div className={styles.column}>
                        <OrderList feedsData={generalOrdersData}/>
                    </div>
                    <div className={styles.column}>
                        <StatusBoard feedsData={generalOrdersData}/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feed;
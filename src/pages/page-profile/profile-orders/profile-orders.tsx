import React, {useEffect} from 'react';
import OrderList from "../../../components/order-list/order-list";
import {useAppDispatch, useAppSelector} from "../../../utils/hooks/redux-hooks";
import {user_order_connect, user_order_disconnect} from "../../../services/stores/action-creators";
import {ws_routes} from "../../../utils/consts";

const ProfileOrders = (): JSX.Element => {

    const dispatch = useAppDispatch();
    const userData = useAppSelector(state => state.userOrders.usersOrders);

    const token: string | undefined = localStorage.getItem("accessToken")?.split('Bearer ')[1];

    useEffect(() => {
        dispatch(user_order_connect(ws_routes.GET_CURRENT_USER_ORDERS + `?token=${token}`));
        return () => {
            dispatch(user_order_disconnect());
        }
    }, [dispatch, token])

    return (
        <div>
            <OrderList feedsData={userData !== undefined ? userData : null}/>
        </div>
    );
};

export default ProfileOrders;
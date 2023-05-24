import {configureStore} from "@reduxjs/toolkit";
import constructorReducer from './stores/constructor-ingredients';
import ingredientsReducer from './stores/ingredients-data';
import orderReducer from './stores/order';
import orderDetailDataReducer from './stores/order-detail-data';
import userReducer from './stores/user-data';
import {generalOrdersReducer} from "./stores/general-orders";
import {userOrdersReducer} from "./stores/user-orders";

import {
    connect as OrdersWsConnect,
    disconnect as OrdersWsDisconnect,
    user_order_connect as UserOrdersWsConnect,
    user_order_disconnect as UserOrdersWsDisconnect,
    user_order_wsClose as UserOrdersWsClose,
    user_order_wsConnecting as UserOrdersWsConnecting,
    user_order_wsError as UserOrdersWsError,
    user_order_wsMessage as UserOrdersWsMessage,
    user_order_wsOpen as UserOrdersWsOpen,
    wsClose as OrdersWsClose,
    wsConnecting as OrdersWsConnecting,
    wsError as OrdersWsError,
    wsMessage as OrdersWsMessage,
    wsOpen as OrdersWsOpen,
} from './stores/action-creators';

import {socketMiddleware} from "./middleware/socket-middleware";

const OrdersMiddleware = socketMiddleware({
    wsConnect: OrdersWsConnect,
    wsDisconnect: OrdersWsDisconnect,
    wsConnecting: OrdersWsConnecting,
    onOpen: OrdersWsOpen,
    onClose: OrdersWsClose,
    onError: OrdersWsError,
    onMessage: OrdersWsMessage
})

const UserOrdersMiddleware = socketMiddleware({
    wsConnect: UserOrdersWsConnect,
    wsDisconnect: UserOrdersWsDisconnect,
    wsConnecting: UserOrdersWsConnecting,
    onOpen: UserOrdersWsOpen,
    onClose: UserOrdersWsClose,
    onError: UserOrdersWsError,
    onMessage: UserOrdersWsMessage
})
export const setupStore = configureStore({
    reducer: {
        ingredientsData: ingredientsReducer,
        constructorData: constructorReducer,
        orderInfo: orderReducer,
        orderDetailInfo: orderDetailDataReducer,
        userInfo: userReducer,
        generalOrders: generalOrdersReducer,
        userOrders: userOrdersReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(OrdersMiddleware, UserOrdersMiddleware)
    }
})


export type RootState = ReturnType<typeof setupStore.getState>
export type AppDispatch = typeof setupStore.dispatch
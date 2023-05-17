import {configureStore} from "@reduxjs/toolkit";
import constructorReducer from './stores/constructor-ingredients';
import ingredientsReducer from './stores/ingredients-data';
import orderReducer from './stores/order';
import userReducer from './stores/user-data';
import {generalOrdersReducer} from "./stores/general-orders";

import {
    connect as OrdersWsConnect,
    disconnect as OrdersWsDisconnect,
    wsClose as OrdersWsClose,
    wsConnecting as OrdersWsConnecting,
    wsError as OrdersWsError,
    wsMessage as OrdersWsMessage,
    wsOpen as OrdersWsOpen,
} from './stores/action-creators'
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
export const setupStore = configureStore({
    reducer: {
        ingredientsData: ingredientsReducer,
        constructorData: constructorReducer,
        orderInfo: orderReducer,
        userInfo: userReducer,
        generalOrders: generalOrdersReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(OrdersMiddleware)
    }
})


export type RootState = ReturnType<typeof setupStore.getState>
export type AppDispatch = typeof setupStore.dispatch
import {IWSOrdersResponse, WebsocketStatus} from "../../utils/types/types";
import {createReducer} from "@reduxjs/toolkit";
import {
    user_order_wsClose,
    user_order_wsConnecting,
    user_order_wsError,
    user_order_wsMessage,
    user_order_wsOpen,
} from "./action-creators";

type TUserOrdersStore = {
    status: WebsocketStatus;
    usersOrders: IWSOrdersResponse | null;
    connectingError: string
}

const initialState: TUserOrdersStore = {
    status: WebsocketStatus.OFFLINE,
    usersOrders: null,
    connectingError: ""
}

export const userOrdersReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(user_order_wsConnecting, state => {
            state.status = WebsocketStatus.CONNECTING
        })
        .addCase(user_order_wsOpen, state => {
            state.status = WebsocketStatus.ONLINE;
        })
        .addCase(user_order_wsClose, state => {
            state.status = WebsocketStatus.OFFLINE;
        })
        .addCase(user_order_wsError, (state, action) => {
            state.connectingError = action.payload;
        })
        .addCase(user_order_wsMessage, (state, action) => {
            state.usersOrders = action.payload;
        })
})
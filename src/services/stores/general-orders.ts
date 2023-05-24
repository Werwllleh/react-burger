import {IWSOrdersResponse, WebsocketStatus} from "../../utils/types/types";
import {createReducer} from "@reduxjs/toolkit";
import {wsClose, wsConnecting, wsError, wsMessage, wsOpen} from "./action-creators";

type TGeneralOrdersStore = {
    status: WebsocketStatus;
    usersOrders: IWSOrdersResponse | null;
    connectingError: string
}

const initialState: TGeneralOrdersStore = {
    status: WebsocketStatus.OFFLINE,
    usersOrders: null,
    connectingError: ""
}

export const generalOrdersReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(wsConnecting, state => {
            state.status = WebsocketStatus.CONNECTING
        })
        .addCase(wsOpen, state => {
            state.status = WebsocketStatus.ONLINE;
            state.connectingError = "";
        })
        .addCase(wsClose, state => {
            state.status = WebsocketStatus.OFFLINE;
            state.connectingError = "";
        })
        .addCase(wsError, (state, action) => {
            state.connectingError = action.payload;
        })
        .addCase(wsMessage, (state, action) => {
            state.usersOrders = action.payload;
        })
})
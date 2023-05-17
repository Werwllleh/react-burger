import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {getOrderNum, getProductData} from "../../utils/burger-api";
import {
    fetchWithRefresh,
    getRegisterData,
    getUserLogin,
    resetUserPassword,
    sendNewPassword,
    userLogoutSystem,
    userUpdateSystem
} from "../../utils/auth-api";
import {apiRoutes} from "../../utils/consts";
import {IUserDataPayload, IWSOrdersResponse} from "../../utils/types/types";


export const fetchIngredients = createAsyncThunk(
    'ingredients/fetchData',
    async () => {
        const data = await getProductData();
        return data.data;
    }
);

export const fetchOrderNum = createAsyncThunk(
    'order/fetchOrderNum',
    getOrderNum
);

export const fetchUserData = createAsyncThunk(
    'user/register',
    getRegisterData
);

export const fetchUserLogin = createAsyncThunk(
    'user/login',
    getUserLogin
);

export const fetchResetPassword = createAsyncThunk(
    'user/reset/password',
    resetUserPassword
);

export const fetchNewPassword = createAsyncThunk(
    'user/save/new/password',
    sendNewPassword
);

export const fetchLogOut = createAsyncThunk(
    'user/logout',
    userLogoutSystem
);

export const fetchUpdateUserData = createAsyncThunk(
    'user/update/date',
    userUpdateSystem
);

export const getUserInfo = createAsyncThunk(
    'user/get_info',
    async () => {
        const accessToken = localStorage.getItem("accessToken") as string;
        return await fetchWithRefresh(apiRoutes.USER_INFO, {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                authorization: accessToken,
            },
        }) as Promise<IUserDataPayload>;
    }
);


export const connect = createAction<string, "ORDERS_CONNECT">("ORDERS_CONNECT");
export const disconnect = createAction("ORDERS_DISCONNECT");
export const wsConnecting = createAction("ORDERS_WS_CONNECTING");
export const wsOpen = createAction("ORDERS_WS_OPEN");
export const wsClose = createAction("ORDERS_WS_CLOSE");
export const wsMessage = createAction<IWSOrdersResponse, "ORDERS_WS_MESSAGE">("ORDERS_WS_MESSAGE");
export const wsError = createAction<string, "ORDERS_WS_ERROR">("ORDERS_WS_ERROR");

export type TOrdersActions = ReturnType<typeof connect> | ReturnType<typeof disconnect> | ReturnType<typeof wsConnecting> | ReturnType<typeof wsOpen> | ReturnType<typeof wsClose> | ReturnType<typeof wsMessage> | ReturnType<typeof connect> | ReturnType<typeof wsError>;
import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {getOrderNum, getProductData} from "../../utils/burger-api";
import {
    fetchWithRefresh,
    getRegisterData,
    getUserLogin,
    resetUserPassword,
    sendNewPassword,
    userLogoutSystem, userUpdateSystem
} from "../../utils/auth-api";
import {apiRoutes} from "../../utils/consts";

export const fetchIngredients = createAsyncThunk(
    'ingredients/fetchData',
    async (_) => {
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
    async (_) => {
        return await fetchWithRefresh(apiRoutes.USER_INFO, {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                authorization: localStorage.getItem("accessToken"),
            },
        });
    }
);

// export const connect = createAction<string, "ORDERS_CONNECT">("ORDERS_CONNECT");

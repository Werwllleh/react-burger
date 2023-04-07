import {createAsyncThunk} from "@reduxjs/toolkit";
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
    async (_, thunkAPI) => {
        try {
            const data = await getProductData();
            return data.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);

export const fetchOrderNum = createAsyncThunk(
    'order/fetchOrderNum',
    async (orderArr, thunkAPI) => {
        try {
            return await getOrderNum(orderArr);
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);


export const fetchUserData = createAsyncThunk(
    'user/register',
    async (userData, thunkAPI) => {
        try {
            return await getRegisterData(userData)
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);

export const fetchUserLogin = createAsyncThunk(
    'user/login',
    async (userData, thunkAPI) => {
        try {
            return await getUserLogin(userData)
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);

export const fetchResetPassword = createAsyncThunk(
    'user/reset/password',
    async (email, thunkAPI) => {
        try {
            return await resetUserPassword(email)
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);

export const fetchNewPassword = createAsyncThunk(
    'user/save/new/password',
    async ({valuePassword, valueCode}, thunkAPI) => {
        try {
            return await sendNewPassword(valuePassword, valueCode)
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);

export const fetchLogOut = createAsyncThunk(
    'user/logout',
    async (_, thunkAPI) => {
        try {
            return await userLogoutSystem()
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);

export const fetchUpdateUserData = createAsyncThunk(
    'user/update/date',
    async ({valueName, valueEmail, valuePassword}, thunkAPI) => {
        try {
            return await userUpdateSystem(valueName, valueEmail, valuePassword)
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);

export const getUserInfo = createAsyncThunk(
    'user/get_info',
    async (_, thunkAPI) => {
        try {
            const response = await fetchWithRefresh(apiRoutes.USER_DATA, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    authorization: localStorage.getItem("refreshToken"),
                },
            });
            console.log(response)
            return response;
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);

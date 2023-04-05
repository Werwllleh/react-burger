import {createAsyncThunk} from "@reduxjs/toolkit";
import {getOrderNum, getProductData} from "../../utils/burger-api";
import {getRegisterData, resetPassword, sendNewPassword} from "../../utils/auth-api";

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
    'user',
    async (userData, thunkAPI) => {
        try {
            return await getRegisterData(userData)
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);

export const fetchResetPassword = createAsyncThunk(
    'user-rest-password',
    async (email, thunkAPI) => {
        try {
            return await resetPassword(email)
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);

export const fetchNewPassword = createAsyncThunk(
    'user-rest-password',
    async ({valuePassword, valueCode}, thunkAPI) => {
        try {
            return await sendNewPassword(valuePassword, valueCode)
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);

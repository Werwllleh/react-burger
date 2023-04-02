import {createAsyncThunk} from "@reduxjs/toolkit";
import {getOrderNum, getProductData} from "../../utils/burger-api";
import {getRegisterData} from "../../utils/auth-api";

export const fetchIngredients = createAsyncThunk(
    'ingredients/fetchData',
    async (_, thunkAPI) => {
        try {
            const response = await getProductData();
            const data = await response;
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
            const response = await getOrderNum(orderArr);
            const orderData = await response;
            return orderData;
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);


export const fetchUserData = createAsyncThunk(
    'user/registration',
    async (userData, thunkAPI) => {
        try {
            const response = await getRegisterData(userData);
            const userInfo = await response;
            console.log(userInfo)
            return userInfo;
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);

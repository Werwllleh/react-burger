import {createAsyncThunk} from "@reduxjs/toolkit";
import {getOrderNum, getProductData} from "../../utils/burger-api";
import {getRegisterData} from "../../utils/auth-api";

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
    'user/registration',
    async (userData, thunkAPI) => {
        console.log(userData)
        try {
            return await getRegisterData(userData)
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);

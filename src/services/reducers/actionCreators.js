import {createAsyncThunk} from "@reduxjs/toolkit";
import {URL} from "../../utils/consts";
import {sendOrderData} from "./order";

export const fetchIngredients = createAsyncThunk(
    'ingredients/fetchData',
    async (_, thunkAPI) => {
        try {
            const response = await fetch(URL + 'ingredients');
            const data = await response.json();
            return data.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
);

export const fetchOrderNum = (orderArr) => async (dispatch) => {
    try {
        const response = await fetch(URL + 'orders', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ingredients: orderArr
            })
        })

        const responseData = await response.json();

        dispatch(sendOrderData(responseData));

    } catch (err) {
        console.log(err)
    }
};

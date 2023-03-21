import {createAsyncThunk} from "@reduxjs/toolkit";
import {URL} from "../../utils/consts";

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

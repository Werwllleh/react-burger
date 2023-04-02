import {createSlice} from "@reduxjs/toolkit";
import {fetchIngredients} from "./actionCreators";

const initialState = {
    ingredients: [],
    isLoading: false,
    error: null
}

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchIngredients.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchIngredients.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.ingredients = action.payload;
            })
            .addCase(fetchIngredients.rejected, (state, action) => {
                state.error = action.payload.message;
                state.isLoading = false;
            });
    },
})

export default ingredientsSlice.reducer;
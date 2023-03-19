import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    ingredients: [],
    isLoading: false,
    error: ''
}

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        ingredientsFetching(state) {
            state.isLoading = true;
        },
        ingredientsFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = '';
            state.ingredients.push(action.payload)
        },
        ingredientsFetchingError(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
    }
})

export default ingredientsSlice.reducer;
export const {ingredientsFetching, ingredientsFetchingError, ingredientsFetchingSuccess} = ingredientsSlice.actions;
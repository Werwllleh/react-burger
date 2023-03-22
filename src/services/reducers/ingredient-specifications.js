import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: '',
    name: '',
    specifications: [],
}

const ingredientSpecificationsSlice = createSlice({
    name: 'ingredientSpecifications',
    initialState,
    reducers: {
        addIngredientData(state, action) {
            state.orderData = action.payload
        },
        removeIngredientData(state, action) {
            state.orderData = action.payload
        },
    }
})

export const { addIngredientData, removeIngredientData } = ingredientSpecificationsSlice.actions;
export default ingredientSpecificationsSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: '',
    image: '',
    specifications: {},
}

const ingredientSpecificationsSlice = createSlice({
    name: 'ingredientSpecifications',
    initialState,
    reducers: {
        addIngredientData(state, action) {
            state.name = action.payload.name;
            state.image = action.payload.image_large;
            state.specifications = {
                calories: action.payload.calories,
                proteins: action.payload.proteins,
                fat: action.payload.fat,
                carbohydrates: action.payload.carbohydrates,
            };
        },
        removeIngredientData(state) {
            state.name = '';
            state.image = '';
            state.specifications = {};
        },
    }
})

export const { addIngredientData, removeIngredientData } = ingredientSpecificationsSlice.actions;
export default ingredientSpecificationsSlice.reducer;
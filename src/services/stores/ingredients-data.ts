import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchIngredients} from "./action-creators";
import {IIngredientArr} from "../../utils/types/types";

interface IIngredientsState {
    ingredients: IIngredientArr[];
    isLoading: boolean;
    error: string | null | undefined;
}

const initialState: IIngredientsState = {
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
            .addCase(fetchIngredients.fulfilled, (state, action: PayloadAction<IIngredientArr[]>) => {
                state.isLoading = false;
                state.error = null;
                state.ingredients = action.payload;
            })
            .addCase(fetchIngredients.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            });
    },
})

export default ingredientsSlice.reducer;
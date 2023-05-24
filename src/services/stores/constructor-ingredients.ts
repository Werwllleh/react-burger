import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';
import {BUN} from "../../utils/consts";
import {IConstructorIngredient, IIngredient} from "../../utils/types/types";

interface IConstructorState {
    bun: IConstructorIngredient | null;
    ingredients: IConstructorIngredient[];
}

const initialState: IConstructorState = {
    bun: null,
    ingredients: []
}

const burgerConstructorSlice = createSlice({
    name: 'burger_structure',
    initialState,
    reducers: {
        addToConstructor: {
            reducer: (state, action: PayloadAction<IConstructorIngredient>) => {
                if (action.payload.type !== BUN) {
                    state.ingredients.push(action.payload)
                } else {
                    state.bun = action.payload
                }
            },
            prepare: (ingredient: IIngredient)=> {
                const key = uuidv4();
                return {payload: { key, ...ingredient}}
            },
        },
        clearConstructorIngredients(state) {
            state.bun = null;
            state.ingredients = [];
        },
        updateConstructorIngredients(state, action) {
            const {dragIndex, hoverIndex} = action.payload;
            state.ingredients.splice(dragIndex, 0, state.ingredients.splice(hoverIndex, 1)[0]);
        },
        removeFromConstructor(state, action) {
            state.ingredients = state.ingredients.filter(item => item.key !== action.payload.id);
        },
    }
})

export default burgerConstructorSlice.reducer;
export const {
    addToConstructor,
    clearConstructorIngredients,
    updateConstructorIngredients,
    removeFromConstructor
} = burgerConstructorSlice.actions
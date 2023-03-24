import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';
import {BUN} from "../../utils/consts";

const initialState = {
    bun: null,
    ingredients: []
}

const burgerConstructorSlice = createSlice({
    name: 'burger_structure',
    initialState,
    reducers: {
        addToConstructor: {
            reducer: (state, action) => {
                if (action.payload.info.type !== BUN) {
                    state.ingredients.push(action.payload)
                } else {
                    state.bun = action.payload
                }
            },
            prepare: ({info}) => ({
                payload: {
                    key: uuidv4(), info
                }
            }),
        },
        updateConstructorIngredients(state, action) {
            const { dragIndex, hoverIndex } = action.payload;
            const draggedItem = state[dragIndex];
            state.splice(dragIndex, 1);
            state.splice(hoverIndex, 0, draggedItem);
        },
        removeFromConstructor(state, action) {
            state.ingredients = state.ingredients.filter(item => item.key !== action.payload.id);
        },
    }
})

export default burgerConstructorSlice.reducer;
export const {addToConstructor, updateConstructorIngredients, removeFromConstructor} = burgerConstructorSlice.actions
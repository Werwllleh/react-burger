import {configureStore} from "@reduxjs/toolkit";
import ingredientsReducer from './reducers/ingredients-data';

// const rootReducer = combineReducers({
//     ingredientsReducer
// })


export const setupStore = () => {
    return configureStore({
        reducer: {
            ingredientsReducer
        }
    })
}
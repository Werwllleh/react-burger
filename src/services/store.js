import {configureStore} from "@reduxjs/toolkit";
import constructorReducer from './reducers/constructor-ingredients';
import ingredientsReducer from './reducers/ingredients-data';

import thunkMiddleware from 'redux-thunk';

export const setupStore = () => {
    return configureStore({
        reducer: {
            ingredientsReducer,
            constructorReducer
        },
        middleware: [thunkMiddleware]
    })
}
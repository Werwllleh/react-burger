import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import constructorReducer from './stores/constructor-ingredients';
import ingredientsReducer from './stores/ingredients-data';
import orderReducer from './stores/order';
import ingredientSpecificationsReducer from './stores/ingredient-specifications';
import userReducer from './stores/user-data';


export const setupStore = () => {
    return configureStore({
        reducer: {
            ingredientsReducer,
            constructorReducer,
            orderReducer,
            ingredientSpecificationsReducer,
            userReducer
        },
        middleware: [thunkMiddleware]
    })
}
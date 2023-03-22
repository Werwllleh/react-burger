import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import constructorReducer from './reducers/constructor-ingredients';
import ingredientsReducer from './reducers/ingredients-data';
import orderReducer from './reducers/order';
import ingredientSpecificationsReducer from './reducers/ingredient-specifications';


export const setupStore = () => {
    return configureStore({
        reducer: {
            ingredientsReducer,
            constructorReducer,
            orderReducer,
            ingredientSpecificationsReducer
        },
        middleware: [thunkMiddleware]
    })
}
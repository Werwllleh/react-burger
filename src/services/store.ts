import {configureStore} from "@reduxjs/toolkit";
import constructorReducer from './stores/constructor-ingredients';
import ingredientsReducer from './stores/ingredients-data';
import orderReducer from './stores/order';
import userReducer from './stores/user-data';


export const setupStore = configureStore({
        reducer: {
            ingredientsData: ingredientsReducer,
            constructorData: constructorReducer,
            orderInfo: orderReducer,
            userInfo: userReducer
        }
    })


export type RootState = ReturnType<typeof setupStore.getState>
export type AppDispatch = typeof setupStore.dispatch
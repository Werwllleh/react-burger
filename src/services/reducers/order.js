import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    orderData: [],
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        sendOrderData(state, action) {
            state.orderData = action.payload
        },
        removeOrderData(state) {
            state.orderData = []
        }
    }
})

export const { sendOrderData, removeOrderData } = orderSlice.actions;
export default orderSlice.reducer;
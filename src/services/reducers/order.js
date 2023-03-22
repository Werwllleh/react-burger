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
        }
    }
})

export const { sendOrderData } = orderSlice.actions;
export default orderSlice.reducer;
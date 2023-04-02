import {createSlice} from "@reduxjs/toolkit";
import {fetchOrderNum} from "./actionCreators";

const initialState = {
    orderData: null,
    loading: false,
    error: null,
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        removeOrderData(state) {
            state.orderData = null
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOrderNum.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchOrderNum.fulfilled, (state, action) => {
            state.orderData = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchOrderNum.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        });
    },
})

export const { removeOrderData } = orderSlice.actions;
export default orderSlice.reducer;
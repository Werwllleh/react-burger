import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchOrderNum} from "./action-creators";
import {IOrderSuccessFields} from "../../utils/types/types";

interface IOrderState {
    orderData: IOrderSuccessFields | null,
    loading: boolean,
    error: string | null | undefined,
}

const initialState: IOrderState = {
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
        builder.addCase(fetchOrderNum.fulfilled, (state, action:PayloadAction<IOrderSuccessFields>) => {
            state.orderData = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchOrderNum.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
})

export const { removeOrderData } = orderSlice.actions;
export default orderSlice.reducer;
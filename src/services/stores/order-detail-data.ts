import {createSlice} from "@reduxjs/toolkit";
import {fetchOrderDetailData} from "./action-creators";
import {IOrderDetail} from "../../utils/types/types";

interface IOrderDetailDataState {
    orderInfo: IOrderDetail | null,
    loading: boolean,
    error: string | null | undefined,
}

const initialState: IOrderDetailDataState = {
    orderInfo: null,
    loading: false,
    error: null,
}

const orderDetailDataSLice = createSlice({
    name: 'order-detail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOrderDetailData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchOrderDetailData.fulfilled, (state, action) => {
            state.orderInfo = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchOrderDetailData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default orderDetailDataSLice.reducer;
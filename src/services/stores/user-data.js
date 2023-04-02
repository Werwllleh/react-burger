import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "./actionCreators";

const initialState = {
    userData: {
        name: null,
        email: null,
    },
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: "user_registration",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.userData = {
                    name: action.payload.user.name,
                    email: action.payload.user.email,
                };
                state.loading = false;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });
    },
});

export default userSlice.reducer;
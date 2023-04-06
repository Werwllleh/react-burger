import {createSlice} from "@reduxjs/toolkit";
import {fetchLogOut, fetchNewPassword, fetchResetPassword, fetchUserData, fetchUserLogin} from "./actionCreators";

const initialState = {
    userData: {
        name: null,
        email: null,
    },
    loading: false,
    error: null,
    isAuthChecked: true
};

const userSlice = createSlice({
    name: "user_registration",
    initialState,
    reducers: {
        changeAuthChecked(state, action) {
            state.isAuthChecked = action.payload;
        },
    },
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

        builder
            .addCase(fetchResetPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchResetPassword.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(fetchResetPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });

        builder
            .addCase(fetchNewPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNewPassword.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(fetchNewPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });

        builder
            .addCase(fetchUserLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserLogin.fulfilled, (state, action) => {
                state.userData = {
                    name: action.payload.user.name,
                    email: action.payload.user.email,
                };
                state.loading = false;
            })
            .addCase(fetchUserLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });

        builder
            .addCase(fetchLogOut.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLogOut.fulfilled, (state, action) => {
                state.userData = {
                    name: action.payload.user.name,
                    email: action.payload.user.email,
                };
                state.loading = false;
            })
            .addCase(fetchLogOut.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });
    },
});

export const {changeAuthChecked} = userSlice.actions;
export default userSlice.reducer;
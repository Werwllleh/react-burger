import {createSlice} from "@reduxjs/toolkit";
import {
    fetchLogOut,
    fetchNewPassword,
    fetchResetPassword, fetchUpdateUserData,
    fetchUserData,
    fetchUserLogin,
    getUserInfo
} from "./actionCreators";


const initialState = {
    userData: {
        name: null,
        email: null,
    },
    loading: false,
    error: null,
    isAuthChecked: false
};

const userSlice = createSlice({
    name: "user_registration",
    initialState,
    reducers: {
        setAuthChecked: (state, action) => {
            state.isAuthChecked = action.payload;
        }
    },
    extraReducers: (builder) => {

        builder
            .addCase(getUserInfo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.isAuthChecked = true;
                state.userData = {
                    name: action.payload.user.name,
                    email: action.payload.user.email,
                };
                state.loading = false;
            })
            .addCase(getUserInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });

        builder
            .addCase(fetchUpdateUserData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUpdateUserData.fulfilled, (state, action) => {
                state.isAuthChecked = true;
                state.userData = {
                    name: action.payload.user.name,
                    email: action.payload.user.email,
                };
                state.loading = false;
            })
            .addCase(fetchUpdateUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });

        builder
            .addCase(fetchUserData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.isAuthChecked = true;
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
                state.isAuthChecked = true;
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
                state.isAuthChecked = true;
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
                state.isAuthChecked = true;
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
                state.isAuthChecked = false;
                state.userData = {
                    name: '',
                    email: '',
                };
                state.loading = false;
            })
            .addCase(fetchLogOut.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });
    },
});

export const {setAuthChecked} = userSlice.actions;
export default userSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";
import {fetchUserData} from "./actionCreators";


const initialState = {
    user: {
        name: null,
        email: null,
    },
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user-registration',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.user = {
                name: action.payload.user.name,
                email: action.payload.user.email,
            };
            state.loading = false;
        });
        builder.addCase(fetchUserData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default userSlice.reducer;
import {
    fetchLogOut,
    fetchNewPassword,
    fetchResetPassword,
    fetchUpdateUserData,
    fetchUserData,
    fetchUserLogin,
    getUserInfo
} from "./action-creators";
import userReducer from './user-data';

describe('user reducers tests', () => {

    const initialState = {
        userData: {
            name: null,
            email: null,
        },
        loading: false,
        error: null,
        isAuthChecked: false
    };

    /**===getUserInfo====**/

    it("should handle pending user information", () => {

        const action = {type: getUserInfo.pending.type};
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it("should handle fulfilled user information", () => {

        const action = {
            type: getUserInfo.fulfilled.type,
            payload: {
                user: {
                    email: "test@yandex.ru",
                    name: "Username"
                }
            }
        };
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            userData: {
                name: action.payload.user.name,
                email: action.payload.user.email,
            }
        });
    });

    it("should handle rejected user information", () => {

        const action = {
            type: getUserInfo.rejected.type,
            error: {
                message: 'User information failed'
            }
        };
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            error: action.error.message,
        });
    });

    /**===fetchUpdateUserData====**/

    it("should handle pending update user information", () => {

        const action = {type: fetchUpdateUserData.pending.type};
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it("should handle fulfilled update user information", () => {

        const action = {
            type: fetchUpdateUserData.fulfilled.type,
            payload: {
                user: {
                    email: "test@yandex.ru",
                    name: "Username"
                }
            }
        };
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            userData: {
                name: action.payload.user.name,
                email: action.payload.user.email,
            },
            isAuthChecked: true
        });
    });

    it("should handle rejected update user information", () => {

        const action = {
            type: fetchUpdateUserData.rejected.type,
            error: {
                message: 'User information failed'
            }
        };
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            error: action.error.message,
        });
    });

    /**===fetchUserData====**/

    it("should handle pending fetch user information", () => {

        const action = {type: fetchUserData.pending.type};
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it("should handle fulfilled fetch user information", () => {

        const action = {
            type: fetchUserData.fulfilled.type,
            payload: {
                user: {
                    email: "test@yandex.ru",
                    name: "Username"
                }
            }
        };
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            userData: {
                name: action.payload.user.name,
                email: action.payload.user.email,
            },
            isAuthChecked: true
        });
    });

    it("should handle rejected fetch user information", () => {

        const action = {
            type: fetchUserData.rejected.type,
            error: {
                message: 'User information failed'
            }
        };
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            error: action.error.message,
        });
    });

    /**===fetchResetPassword====**/

    it("should handle pending fetch user reset password", () => {

        const action = {type: fetchResetPassword.pending.type};
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it("should handle fulfilled fetch user reset password", () => {

        const action = {type: fetchResetPassword.fulfilled.type};
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            isAuthChecked: true,
            loading: false
        });
    });

    it("should handle rejected fetch user reset password", () => {

        const action = {
            type: fetchResetPassword.rejected.type,
            error: {
                message: 'User information failed'
            }
        };
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            error: action.error.message,
            loading: false
        });
    });

    /**===fetchNewPassword====**/

    it("should handle pending fetch user password", () => {

        const action = {type: fetchNewPassword.pending.type};
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it("should handle fulfilled fetch user password", () => {

        const action = {type: fetchNewPassword.fulfilled.type};
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            isAuthChecked: true,
            loading: false
        });
    });

    it("should handle rejected fetch user password", () => {

        const action = {
            type: fetchNewPassword.rejected.type,
            error: {
                message: 'User information failed'
            }
        };
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            error: action.error.message,
            loading: false
        });
    });

    /**===fetchUserLogin====**/

    it("should handle pending login user", () => {

        const action = {type: fetchUserLogin.pending.type};
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it("should handle fulfilled login user", () => {

        const action = {
            type: fetchUserLogin.fulfilled.type,
            payload: {
                user: {
                    email: "test@yandex.ru",
                    name: "Username"
                }
            }
        };
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            userData: {
                name: action.payload.user.name,
                email: action.payload.user.email,
            },
            isAuthChecked: true
        });
    });

    it("should handle rejected login user", () => {

        const action = {
            type: fetchUserLogin.rejected.type,
            error: {
                message: 'User login failed'
            }
        };
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            error: action.error.message,
            loading: false
        });
    });

    /**===fetchLogOut====**/

    it("should handle pending logout user", () => {

        const action = {type: fetchLogOut.pending.type};
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it("should handle fulfilled logout user", () => {

        const action = {
            type: fetchLogOut.fulfilled.type,
            payload: {
                user: {
                    email: "",
                    name: ""
                }
            }
        };
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            userData: {
                name: action.payload.user.name,
                email: action.payload.user.email,
            },
        });
    });

    it("should handle rejected logout user", () => {

        const action = {
            type: fetchLogOut.rejected.type,
            error: {
                message: 'User login failed'
            }
        };
        const result = userReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            error: action.error.message,
            loading: false
        });
    });
})
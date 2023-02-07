import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    token: string | null;
    loggedIn: boolean;
    keepLoggedIn: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    token: localStorage.getItem("token") ?? null,
    keepLoggedIn: localStorage.getItem("keepLoggedIn") === "true" ?? false,
    loggedIn: !!localStorage.getItem("token"),
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest(state) {
            state.token = null;
            state.loggedIn = false;
            state.error = null;
            state.loading = true;
            state.error = null;
        },
        loginSucceed(state, action: PayloadAction<{token: string}>) {
            state.token = action.payload.token;
            state.loggedIn = true;
            state.loading = false;
            state.error = null;
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.token = null;
            state.loggedIn = false;
        }
    }
})

export const { loginRequest, loginSucceed, loginFailed, logout } = authSlice.actions;
export default authSlice.reducer;

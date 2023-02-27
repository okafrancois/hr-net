import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
    token: string | null;
    loggedIn: boolean;
    keepLoggedIn: boolean;
    loading: boolean;
    error: boolean;
    errorMessage: string | null;
}

const initialState: UserState = {
    token: localStorage.getItem("token") ?? null,
    keepLoggedIn: localStorage.getItem("keepLoggedIn") === "true" ?? false,
    loggedIn: !!localStorage.getItem("token"),
    loading: false,
    error: false,
    errorMessage: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest(state) {
            state.token = null;
            state.loggedIn = false;
            state.error = false;
            state.loading = true;
            state.errorMessage = null;
        },
        loginSucceed(state, action: PayloadAction<{ token: string }>) {
            state.token = action.payload.token;
            state.loggedIn = true;
            state.loading = false;
            state.error = false;
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.payload;
        },
        logout(state) {
            state.token = null;
            state.loggedIn = false;
        }
    }
})

export const {loginRequest, loginSucceed, loginFailed, logout} = authSlice.actions;
export default authSlice.reducer;

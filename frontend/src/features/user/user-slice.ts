import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserProfile {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
}
export interface UserState {
    data: UserProfile;
    loading: boolean,
    error: string | null,
}

const initialState: UserState = {
    data: {
        firstName: null,
        lastName: null,
        email: null,
    },
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserDataRequest(state) {
            state.loading = true;
            state.error = null;
        },
        getUserDataSucceed(state, action: PayloadAction<UserProfile>) {
            state.data = {
                email : action.payload.email,
                firstName : action.payload.firstName,
                lastName : action.payload.lastName,
            }
            state.loading = false;
            state.error = null;
        },
        getUserDataFailed(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})


export const { getUserDataRequest, getUserDataSucceed, getUserDataFailed } = userSlice.actions;
export default userSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth-slice';
import userReducer from '../features/user/user-slice';
import employeesReducer from '../features/employees/employees-slice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        employees: employeesReducer,
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

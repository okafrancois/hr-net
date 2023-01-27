import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface Employee {
    _id: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
    team: string;
    email: string;
    phoneNumber: number;
    arrivalDate: string;
    street: string,
    city: string,
    state: string,
    zipcode: number,
    createById: string;
    createdAt: string;
    updatedAt: string;
    "__v": number;
}
export interface EmployeesState {
    data: Employee[] | [];
    loading: boolean;
    error: string | null;
}

const initialState: EmployeesState = {
    data: [],
    loading: false,
    error: null,
}

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        getEmployeesRequest(state) {
            state.loading = true;
            state.error = null;
        },
        getEmployeesSucceed(state, action: PayloadAction<Employee[]>) {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        getEmployeesFailed(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        postEmployeeRequest(state) {
            state.loading = true;
            state.error = null;
        },
        postEmployeeSucceed(state, action: PayloadAction<Employee>) {
            state.loading = false;
            state.error = null;
        },
        postEmployeeFailed(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})
export const { getEmployeesRequest, getEmployeesFailed, getEmployeesSucceed, postEmployeeRequest, postEmployeeSucceed, postEmployeeFailed } = employeesSlice.actions;
export default employeesSlice.reducer;

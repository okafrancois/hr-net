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
    currentPage: number;
    limit: number;
    totalDocuments: number;
    totalPages: number;
    loading: boolean;
    error: string | null;
}

interface GetEmployeesResponse {
    employees: Employee[];
    currentPage: number;
    limit: number;
    totalDocuments: number;
    totalPages: number;
}

const initialState: EmployeesState = {
    data: [],
    currentPage: 1,
    limit: 10,
    totalDocuments: 0,
    totalPages: 0,
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
        getEmployeesSucceed(state, action: PayloadAction<GetEmployeesResponse>) {
            state.data = action.payload.employees;
            state.currentPage = action.payload.currentPage;
            state.limit = action.payload.limit;
            state.totalDocuments = action.payload.totalDocuments;
            state.totalPages = action.payload.totalPages;
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
        },
        updateCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        updateLimit(state, action: PayloadAction<number>) {
            state.limit = action.payload;
        }
    }
})
export const {
    getEmployeesRequest,
    getEmployeesFailed,
    getEmployeesSucceed,
    postEmployeeRequest,
    postEmployeeSucceed,
    postEmployeeFailed,
    updateCurrentPage,
    updateLimit
} = employeesSlice.actions;
export default employeesSlice.reducer;

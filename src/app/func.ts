import {loginSucceed, loginFailed, loginRequest, logout} from "../features/auth/auth-slice";
import {getUserDataFailed, getUserDataRequest, getUserDataSucceed} from "../features/user/user-slice";
import {EditUserFunc, GetUserDataFunc, LogUserInFunc, LogUserOutFunc} from "./func-types";
import {getEmployeesRequest, getEmployeesFailed, getEmployeesSucceed, postEmployeeRequest, postEmployeeSucceed, postEmployeeFailed} from "../features/employees/employees-slice";

export const logUserIn: LogUserInFunc = ({ email, password }, dispatch, keepLoggedIn) => {
    dispatch(loginRequest());

    const uri = `${import.meta.env.VITE_API_URL}/user/login`;

    const myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    const raw = JSON.stringify({
        email: email,
        password: password
    });

    const requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(uri, requestOptions)
        .then(response => response.json())
        .then(result => {
            const { token } = result.body;
            if (token) {
                if (keepLoggedIn) {
                    localStorage.setItem('token', token);
                } else {
                    sessionStorage.setItem('token', token);
                }

                dispatch(loginSucceed({token}));
            } else {
                dispatch(loginFailed(result.message));
            }
        })
        .catch(error => {
            dispatch(loginFailed(error));
        })
}
export const logUserOut: LogUserOutFunc = (dispatch) => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    dispatch(logout());
}
export const getUserData: GetUserDataFunc = (token, dispatch) => {
    dispatch(getUserDataRequest());

    const uri = `${import.meta.env.VITE_API_URL}/user/profile`;

    const myHeaders = new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    });

    const requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch(uri, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.body) {
                const { email, firstName, lastName } = result.body;

                dispatch(getUserDataSucceed({
                    email,
                    firstName,
                    lastName
                }));
            } else {
                dispatch(getUserDataFailed(result.message));
            }
        })
        .catch(error => {
            dispatch(getUserDataFailed(error));
        })
}
export const editUserData: EditUserFunc = (data, dispatch, resolveCallback) => {
    const uri = `${import.meta.env.VITE_API_URL}/user/profile`;
    const token = localStorage.getItem("token") ?? sessionStorage.getItem("token") ?? null;

    const myHeaders = new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    });

    const raw = JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName
    });

    const requestOptions: RequestInit = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    }

    fetch(uri, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.body) {
                const { email, firstName, lastName } = result.body;

                dispatch(getUserDataSucceed({
                    email,
                    firstName,
                    lastName
                }));

                resolveCallback();
            } else {
                dispatch(getUserDataFailed(result.message));
            }
        })
        .catch(error => {
            dispatch(getUserDataFailed(error));
        })
}
export const getEmployees = (token: string, dispatch: (arg0: any) => void, limit = 10, page = 1) => {
    dispatch(getEmployeesRequest());
    const uri = `${import.meta.env.VITE_API_URL}/user/employees/${page}/${limit}`;

    const myHeaders = new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    });

    const requestOptions: RequestInit = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch(uri, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.body) {
                const data = result.body;

                dispatch(getEmployeesSucceed(data));
            } else {
                dispatch(getEmployeesFailed(result.message));
            }
        })
        .catch(error => {
            dispatch(getEmployeesFailed(error));
        })
}

export const postEmployee = (token: string, dispatch: any, employeeData: any, resolveCallback: any) => {
    dispatch(postEmployeeRequest());
    const uri = `${import.meta.env.VITE_API_URL}/user/employees`;

    const myHeaders = new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    });

    const requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify(employeeData)
    };

    fetch(uri, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.body) {
                const data = result.body;
                dispatch(postEmployeeSucceed(data));
                resolveCallback();
            } else {
                dispatch(postEmployeeFailed(result.message));
            }
        })
        .catch(error => {
            dispatch(postEmployeeFailed(error));
        })
}

import {createBrowserRouter} from "react-router-dom";
import Home from "../views/Home/home";
import Login from "../views/Login/login";
import EmployeesListing from "../views/Employees Listing/employees-listing";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/employees',
        element: <EmployeesListing />,
    }
])

export default routes;

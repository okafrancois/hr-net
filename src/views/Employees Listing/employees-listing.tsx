import React, {useEffect, useState} from 'react';
import './employees-listing.scss'
import Layout from "../../components/Layout/Layout";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useNavigate} from "react-router";
import {getEmployees} from "../../app/func";
import AddEmployee from "../../components/AddEmployee/add-employee";
import SpModal from "sp-modal";
import TableComponent from "../../components/TableComponent/table-component";

const headers = [
    {
        name: 'First Name',
        key: 'firstName',
        sortable: true

    },
    {
        name: 'Last Name',
        key: 'lastName',
        sortable: true
    },
    {
        name: 'Birth Date',
        key: 'birthDate',
        sortable: true
    },
    {
        name: 'Start Date',
        key: 'startDate',
        sortable: true
    },
    {
        name: 'Job Title',
        key: 'jobTitle',
        sortable: true
    },
    {
        name: 'Department',
        key: 'department',
        sortable: true
    },
    {
        name: 'Street',
        key: 'street',
        sortable: true
    },
    {
        name: 'City',
        key: 'city',
        sortable: true
    },
    {
        name: 'State',
        key: 'state',
        sortable: true
    },
    {
        name: 'Zip Code',
        key: 'zipcode',
        sortable: true
    },
]
const EmployeesListing = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const loggedIn = useAppSelector(state => state.auth.loggedIn)
    const token = useAppSelector(state => state.auth.token)
    const user = useAppSelector(state => state.user.data)
    const employees = useAppSelector(state => state.employees.data)

    useEffect(() => {
        if (!loggedIn || !token) {
            navigate('/login')
        }

        if (token && user) {
            getEmployees(token, dispatch)
        }
    }, [loggedIn, navigate])

    const [formState, setFormState] = useState({
        activeSearch: '',
        activeSort: 'name',
        page: 1,
    })

    const [modalState, setModalState] = useState(false)

    function handleModalToggle(e: any) {
        if (e) {
            e.preventDefault();
        }
        setModalState(!modalState)
    }

    const openModal = function(e: any) {
        if (e) {
            e.preventDefault();
        }
        setModalState(true)
    }

    const handleSubmit = function(e: any) {
        e.preventDefault();
    }

    return (
        <Layout containerClass={"employees-listing-view"}>
            <h1>Employees Listing</h1>
            <form onSubmit={handleSubmit} className={"employee-listing-form"}>
                <div className="employees-listing-view__headings">
                    <label className={"employee-listing-form__field search"}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="search" className={"input"} placeholder={"Search"}/>
                    </label>
                    <label className={"employee-listing-form__field"}>
                        <span>Entries to show</span>
                        <div className="custom-select">
                            <select className={"input"} defaultValue={"10"}>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                    </label>
                    <label htmlFor="" className="employee-listing-form__field">
                        <Link to={'/add-employee'} onClick={openModal}>
                            <i className="fa fa-user-circle"></i>
                            Add Employee
                        </Link>
                    </label>
                </div>
                <TableComponent headers={headers} data={employees}/>
            </form>
            <SpModal title={"Add new employee"} visible={modalState} closeHandler={handleModalToggle}>
                <AddEmployee submitCallBack={handleModalToggle}/>
            </SpModal>
        </Layout>
    );
};

export default EmployeesListing;

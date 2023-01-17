import React, {useEffect, useState} from 'react';
import './employees-listing.scss'
import Layout from "../../components/Layout/Layout";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useNavigate} from "react-router";
import {getEmployees} from "../../app/func";
import AddEmployee from "../../components/AddEmployee/add-employee";
import Modal from "../../components/Modal/modal";

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

    const handleModalToggle = (e: any) => {
        if (e) {
            e.preventDefault();
        }
        setModalState(!modalState)
    }

    const openModal = (e: any) => {
        if (e) {
            e.preventDefault();
        }
        setModalState(!modalState)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
                <table className="listing-table">
                    <thead className="listing-table__headers">
                        <tr>
                            <th className="listing-table__header">
                                <span>First name</span>
                                <i className="fa-solid fa-sort"></i>
                            </th>
                            <th className="listing-table__header">
                                <span>Last name</span>
                                <i className="fa-solid fa-sort"></i>
                            </th>
                            <th className="listing-table__header">
                                <span>Birth Date</span>
                                <i className="fa-solid fa-sort"></i>
                            </th>
                            <th className="listing-table__header">
                                <span>Start Date</span>
                                <i className="fa-solid fa-sort"></i>
                            </th>
                            <th className="listing-table__header">
                                <span>Job title</span>
                                <i className="fa-solid fa-sort"></i>
                            </th>
                            <th className="listing-table__header">
                                <span>Department</span>
                                <i className="fa-solid fa-sort"></i>
                            </th>
                            <th className="listing-table__header">
                                <span>Street</span>
                                <i className="fa-solid fa-sort"></i>
                            </th>
                            <th className="listing-table__header">
                                <span>City</span>
                                <i className="fa-solid fa-sort"></i>
                            </th>
                            <th className="listing-table__header">
                                <span>State</span>
                                <i className="fa-solid fa-sort"></i>
                            </th>
                            <th className="listing-table__header">
                                <span>Zip Code</span>
                                <i className="fa-solid fa-sort"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map((employee, index) => (
                            <EmployeeRow key={employee._id} data={employee}/>
                        ))
                    }
                    </tbody>
                </table>
            </form>
            <Modal title={"Add new employee"} state={modalState} closeHandler={handleModalToggle}>
                <AddEmployee submitCallBack={handleModalToggle}/>
            </Modal>
        </Layout>
    );
};

const EmployeeRow = ({data}: any) => {
    const {firstName, lastName, birthDate, startDate, jobTitle, department, address} = data;
    return (
        <tr className="listing-table__row">
            <td className="listing-table__cell">{firstName}</td>
            <td className="listing-table__cell">{lastName}</td>
            <td className="listing-table__cell">{birthDate}</td>
            <td className="listing-table__cell">{startDate}</td>
            <td className="listing-table__cell">{jobTitle}</td>
            <td className="listing-table__cell">{department}</td>
            <td className="listing-table__cell">{address.street}</td>
            <td className="listing-table__cell">{address.city}</td>
            <td className="listing-table__cell">{address.state}</td>
            <td className="listing-table__cell">{address.zipcode}</td>
        </tr>
    );
};

export default EmployeesListing;

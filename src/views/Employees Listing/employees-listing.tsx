import React, {useEffect, useState} from 'react';
import './employees-listing.scss';
import Layout from '../../components/Layout/Layout';
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useNavigate} from "react-router";
import {getEmployees} from "../../app/func";
import AddEmployee from "../../components/AddEmployee/add-employee";
import TableComponent from "supa-table";
import SpModal from "sp-modal";

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
    const {totalDocuments, totalPages, limit, currentPage} = useAppSelector(state => state.employees)
    const [modalState, setModalState] = useState(false)

    useEffect(() => {
        if (!loggedIn || !token) {
            navigate('/login')
        }

        if (token && user) {
            getEmployees(token, dispatch, limit, currentPage)
        }
    }, [loggedIn, navigate])

    function handleModalToggle(e: any) {
        if (e) {
            e.preventDefault();
        }
        setModalState(!modalState)
    }

    const handleLimitChange = function (limitValue: any) {
        if (token) {
            getEmployees(token, dispatch, limitValue, 1)
        }
    }

    const handlePageChange = function (page: number) {
        if (token) {
            getEmployees(token, dispatch, limit, page)
        }
    }

    const openModal = function (e: any) {
        if (e) {
            e.preventDefault();
        }
        setModalState(true)
    }

    return (
        <Layout containerClass={"employees-listing-view"}>
            <h1>Employees Listing</h1>
            <div className="employees-listing-view__content">
                <Link className={"employee-listing-form__field"} to={'/add-employee'} onClick={openModal}>
                    <i className="fa fa-user-circle"></i>
                    Add Employee
                </Link>
                <TableComponent
                    headers={headers}
                    data={employees}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    limit={limit}
                    onLimitChange={handleLimitChange}
                    totalResults={totalDocuments}
                    onPageChange={handlePageChange}
                />
            </div>
            <SpModal title={<h3>Add new employee</h3>} visible={modalState} closeHandler={handleModalToggle}>
                <AddEmployee submitCallBack={handleModalToggle}/>
            </SpModal>
        </Layout>
    );
};

export default EmployeesListing;

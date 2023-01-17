import React from 'react';
import './add-employee.scss'
import {getEmployees, postEmployee} from "../../app/func";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
const AddEmployee = ({submitCallBack}: any) => {
    const token = useAppSelector(state => state.auth.token)
    const dispatch = useAppDispatch()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // get form data
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const {firstName, lastName, birthDate, startDate, jobTitle, department, street, city, state, zipcode } = data;

        const employee = {
            firstName,
            lastName,
            birthDate,
            startDate,
            jobTitle,
            department,
            address: {
                street,
                city,
                state,
                zipcode
            }
        }

        if (token) {
            postEmployee(token, dispatch, employee, () => {
                getEmployees(token, dispatch)
            })
        }

        submitCallBack()
    }

    return (
        <form className={"add-employee-form"} onSubmit={handleSubmit}>
            <label className="add-employee-form__field form-field">
                <span>First name</span>
                <input type="text" className={"input"} name={"firstName"} required={true}/>
            </label>
            <label className="add-employee-form__field form-field">
                <span>Last name</span>
                <input type="text" className={"input"} name={"lastName"} required={true}/>
            </label>
            <label className="add-employee-form__field form-field">
                <span>Birth Date</span>
                <input type="date" className={"input"} name={"birthDate"} required={true}/>
            </label>
            <label className="add-employee-form__field form-field">
                <span>Start Date</span>
                <input type="date" className={"input"} name={"startDate"} required={true}/>
            </label>
            <label className={"add-employee-form__field form-field"}>
                <span>Job Title</span>
                <input className={"input"} name={"jobTitle"} required={true}/>
            </label>
            <label className={"add-employee-form__field form-field"}>
                <span>Department</span>
                <select defaultValue={"Sales"} className={"input"} name={"department"} required={true}>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Management">Management</option>
                </select>
            </label>
            <label className="add-employee-form__field form-field">
                <span>Street</span>
                <input type="text" className={"input"} name={"street"} required={true}/>
            </label>
            <label className="add-employee-form__field form-field">
                <span>City</span>
                <input type="text" className={"input"} name={"city"} required={true}/>
            </label>
            <label className="add-employee-form__field form-field three-third-width">
                <span>State</span>
                <select defaultValue={"Alabama"} name="state" className={"input"} required={true}>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                </select>
            </label>
            <label className="add-employee-form__field form-field quarter-width">
                <span>Zip code</span>
                <input type="number" name={"zipcode"} className={"input"} required={true}/>
            </label>
            <div className="action">
                <button className="button --primary" type={"submit"}>Save</button>
            </div>
        </form>
    );
};

export default AddEmployee;

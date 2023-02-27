import React, {FormEvent, useEffect, useRef, useState} from 'react';
import './login.scss'
import Layout from "../../components/Layout/Layout";
import logo from '../../assets/logo-hrnet.png';
import {useNavigate} from "react-router";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {logUserIn} from "../../app/func";

const Login = () => {
    const loggedIn = useAppSelector(state => state.auth.loggedIn)
    const logginError = useAppSelector(state => state.auth.error)
    const errorMessage = useAppSelector(state => state.auth.errorMessage)
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const keepLoggedInRef = useRef<HTMLInputElement>(null);
    const [passwordToggle, setPasswordToggle] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        const keepLoggedIn = keepLoggedInRef.current?.checked ?? false;

        if (email && password) {
            logUserIn({email, password}, dispatch, keepLoggedIn)
        }
    }

    const togglePassword = () => {
        if (passwordRef.current) {
            passwordRef.current.type = passwordRef.current.type === 'password' ? 'text' : 'password';
            setPasswordToggle(!passwordToggle);
        }
    }

    useEffect(() => {
        if (loggedIn) {
            navigate('/employees')
        }
    })

    return (
        <Layout containerClass={"login-view"} header={false}>
            <div className="login-view__headings">
                <img src={logo} alt="" className="login-view__logo"/>
                <h1 className="login-view__title">Welcome back to HRnet !</h1>
            </div>
            <form className="login-view__form login-form" onSubmit={handleSubmit}>
                <label className={"login-form__field email"}>
                    <span>Your email address</span>
                    <input ref={emailRef} type="email" placeholder="Email" className={"input"}/>
                </label>
                <label className={"login-form__field"}>
                    <span>Your password</span>
                    <span className={"password input"}>
                        <input type="password" placeholder="......." ref={passwordRef}/>
                        <i className={`far fa-eye${passwordToggle ? '' : '-slash'}`} onClick={togglePassword}></i>
                    </span>
                </label>
                <label className={"login-form__field keep"}>
                    <input ref={keepLoggedInRef} type="checkbox"/>
                    <span>Remember me</span>
                </label>
                <button className={"login-form__button button --primary"}>Log in</button>
                {logginError && <p className={"login-form__error"}>{errorMessage}</p>}
            </form>
        </Layout>
    );
};

export default Login;

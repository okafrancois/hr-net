import React from 'react';
import {Link} from "react-router-dom";
import './header.scss';
import logo from '../../assets/logo-hrnet.png';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {logUserOut} from "../../app/func";

const Header = () => {
    const loggedIn = useAppSelector(state => state.auth.loggedIn)
    const dispatch = useAppDispatch()

    const handleLogout = () => {
        logUserOut(dispatch)
    }
    
    return (
        <header>
            <nav className="main-nav">
                <Link className="main-nav-logo" to={'/'}>
                    <img className={"main-nav-logo__img"} src={logo} alt="App logo"/>
                    <span className={"main-nav-logo__name"}>HRnet</span>
                </Link>
                <div>
                    {
                        !loggedIn &&
                        <Link className="main-nav-item" to={'/login'}>
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    }
                    {loggedIn &&
                        <Link className="main-nav-item" to={'/employees'}>
                            <i className="fa fa-user-circle"></i>
                            All Employees
                        </Link>
                    }
                    {
                        loggedIn &&
                        <a href={"#"} className="main-nav-item" onClick={handleLogout}>
                            <i className="fa-sharp fa-solid fa-right-from-bracket"></i>
                            Sign Out
                        </a>
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;

import React, {useEffect} from 'react';
import './home.scss'
import Layout from "../../components/Layout/Layout";
import {useNavigate} from "react-router";

const Home = () => {
    const navigate = useNavigate();
    const isLogged = false;

    useEffect(() => {
        if (!isLogged) {
            // redirect to login page
            navigate('/login');
        } else {
            // redirect to dashboard
            navigate('/employees');
        }
    })
    return (
        <Layout  containerClass={"home-view"}>
            <h1>Home page</h1>
        </Layout>
    );
};

export default Home;

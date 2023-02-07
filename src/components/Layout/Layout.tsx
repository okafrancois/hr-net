import React from 'react';
import Header from "../Header/Header";

const Layout = ({children, containerClass, header = true}: any) => {
    return (
        <div className={`app`}>
            {header && <Header/>}
            <main className={`${containerClass}`}>
                {children}
            </main>
        </div>
    );
};

export default Layout;

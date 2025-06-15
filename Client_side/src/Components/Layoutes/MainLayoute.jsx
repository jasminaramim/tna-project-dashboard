import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';


const MainLayoute = () => {
    const location = useLocation();
    const head = 
    location.pathname.includes("login")||
    location.pathname.includes("register")||
    location.pathname.includes("reset-password");
    return (
        <div>
            {head || <Navbar/>}
            <Outlet/>
            {head || <Footer />}
        </div>
    );
};

export default MainLayoute;
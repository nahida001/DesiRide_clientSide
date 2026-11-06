import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Share/Navbar';
import Footer from '../Pages/Share/Footer';

const RootLayout = () => {
    return (
        <div className='px-20'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;
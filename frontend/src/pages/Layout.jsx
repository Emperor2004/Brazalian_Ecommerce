
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './NavBar.jsx';
import Home from "./Home";


const Layout = () => {
    return (
        // <div className='h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        //     <NavBar />
        //     <Home />
        // </div>
        <div>
            <header>My E-commerce App</header>
            {/* Render nested routes here */}
            <main className='h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500'>
            
                    <Navbar />
                    <Home />
            </main>
            <footer>Footer Content</footer>
        </div>
    )
}

export default Layout;
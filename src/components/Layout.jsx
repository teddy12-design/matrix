import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    // Mock login state for now
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => setIsLoggedIn(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

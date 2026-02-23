import { useAuth } from '../context/AuthContext';

const Layout = ({ children }) => {
    const { isLoggedIn, logout } = useAuth();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar isLoggedIn={isLoggedIn} onLogout={logout} />
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

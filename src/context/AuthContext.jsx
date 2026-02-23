import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setIsLoggedIn(true);
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email, password) => {
        // Mock login logic
        const mockUser = { name: 'John Doe', email };
        setIsLoggedIn(true);
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
        return true;
    };

    const register = (name, email) => {
        // Mock registration logic
        const mockUser = { name, email };
        setIsLoggedIn(true);
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
        return true;
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

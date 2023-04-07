import React, { useEffect, useState } from 'react';
import { AppRoutes } from './routes';
import { AuthContext } from './context/authContext';
import ThemeProvider from './provider/ThemeProvider';


function App() {
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setAuth(true);
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                loading,
            }}
        >
            <ThemeProvider>
                <AppRoutes />
            </ThemeProvider>
        </AuthContext.Provider>
    );
}

export default App;

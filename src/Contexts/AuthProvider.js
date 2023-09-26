import { useState, createContext, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [authUser, setAuthUser] = useState({});

    useEffect(() => {
        const handleTokenUpdate = () => {
          // Update the token state when the custom event is triggered
          setToken(localStorage.getItem('token'));
        };
    
        // Listen for the custom event
        window.addEventListener('tokenUpdated', handleTokenUpdate);
    
        return () => {
          // Remove the event listener when the component is unmounted
          window.removeEventListener('tokenUpdated', handleTokenUpdate);
        };
      }, []);

    const value = {
        authUser,
        setAuthUser,
        token,
        setToken,
      };
    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>;
}
    
export default AuthContext;
import { useState, createContext, useEffect } from "react";
// var jwt = require("jsonwebtoken");

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem('is_admin'))
    const [id, setId] = useState(localStorage.getItem('id'))
console.log("admin",isAdmin)
console.log("email", id)
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
        setIsAdmin,
        token,
        id,
        isAdmin,
      };
    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>;
}
    
export default AuthContext;
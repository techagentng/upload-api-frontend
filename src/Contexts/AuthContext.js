import { useState, createContext } from "react";

const AuthContext = createContext({});

export default function AuthProvider({children}) {
    const [authUser, setAuthUser] = useState({});

    const value = {
        authUser,
        setAuthUser,
    };
    return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
}
    

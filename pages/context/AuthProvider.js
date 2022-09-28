import { createContext, useState } from "react";
import { useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth,SetAuth] = useState();
    const [username,SetUserName] = useState();

    useEffect(() => {
        const user = (localStorage.getItem('user'))
        SetAuth(user);
        // const username = (localStorage.getItem('username'))
        // SetUserName(username);
        // , username ,SetUserName

    },[])


    return(
        <AuthContext.Provider value = {{auth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;



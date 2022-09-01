import { useEffect } from "react";
import { createContext, useState } from "react"

export const UserContext = createContext();

const Context = ({ children }) => {
    const [user, setUser] = useState(() => { return { loggedIn: null } });

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/account`, { credentials: "include" })
        .then(
            resp => resp.json()
        ).then(
            data => {
                console.log({...data});
                setUser({ ...data });
            }
        )
    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export default Context;
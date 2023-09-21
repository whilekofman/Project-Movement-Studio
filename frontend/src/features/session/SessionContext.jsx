import { createContext, useContext, useEffect, useReducer } from "react";
import csrfFetch, { restoreCSRF } from "../csrf";
import sessionReducer from "./sessionReducer";

const initialSession = {
    user: JSON.parse(sessionStorage.getItem("currentUser")) || null,
    isLoggedIn: !!sessionStorage.getItem("currentUser"), // makes sure that isLoggedIn is true or false and not null
};

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [session, dispatch ] = useReducer(sessionReducer, initialSession);

    useEffect(() => {
        const restoreSession = async () => {
            try {
                const response = await restoreCSRF();
                const data = await response.json();
                dispatch({type: "LOGIN", user: data.user});
            } catch (error) {
                console.error("Problem restoring session: ", error);
                throw error;
            }
        }

        restoreSession();
    }, []);

    const login = async ({ credential, password}) => {
        try {
            const res = await csrfFetch("/api/v1/session", {
                method: 'POST',
                body: JSON.stringify({ credential, password }),
            });
            const data = await res.json();
            dispatch({type: 'LOGIN', user: data.user});
            return res;
        } catch (error) {
            console.error("Problem with login: ", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            const res =  await csrfFetch("/api/v1/session", {
                method: "DELETE",
            });
            dispatch({type: 'LOGOUT'});
            return res;
        } catch (error) {
            console.error("Problem with logout: ", error);
            throw error;
        }
    }
    
    return (
        <SessionContext.Provider value={{ session, login, logout }}>
            {children}
        </SessionContext.Provider>
    );
};

export const useSession = () => {
    const context = useContext(SessionContext);

    if (!context) {
        throw new Error('useSession must be used in a SessionProvider');
    }

    return context;
};
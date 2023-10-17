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

    const storeCurrentUser = (user) => {
        if (user) {
            sessionStorage.setItem("currentUser", JSON.stringify(user))
        } else {
            sessionStorage.removeItem("currentUser")
        }
    }

    const storeCSRFToken = (res) => {
        const csrfToken = res.headers.get("X-CSRF-Token");
        if (csrfToken) {
            sessionStorage.setItem("X-CSRF-Token", csrfToken);
        }
    }

    const restoreSession = () => async dispatch => {
        const res = await csrfFetch("http://localhost:5000/api/v1/session");
        storeCSRFToken(res);
        const data = await res.json();
        storeCurrentUser(data.user);
        dispatch({type: 'LOGIN', user: data.user});
        return res;
    }

    const login = async ({ email, password}) => {
        try {
            const res = await csrfFetch("http://localhost:5000/api/v1/session", {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            dispatch({type: 'LOGIN', user: data.user});
            return res;
        } catch (error) {
            console.error("Problem with login: ", error);
            throw error;
        }
    }

    const logout = async () => {
        try {
            const res =  await csrfFetch("http://localhost:5000/api/v1/session", {
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
        <SessionContext.Provider value={{ session, login, logout, restoreSession }}>
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
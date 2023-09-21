import { createContext, useContext, useEffect, useReducer } from "react";
import csrfFetch, { restoreCSRF } from "../csrf";

const initialSession = {
    user: JSON.parse(sessionStorage.getItem("currentUser")) || null,
    isLoggedIn: !!sessionStorage.getItem("currentUser"), // makes sure that isLoggedIn is true or false and not null
};

const SessionContext = createContext();

const sessionReducer = (state, action) => {

    switch (action.type) {
        case 'LOGIN':
            sessionStorage.setItem("currentUser"), JSON.stringify(action.user);
            return {...state, user: action.user, isLoggedIn: true};
        case 'LOGOUT':
            sessionStorage.removeItem("currentUser");
            return {...state, user: null, isLoggedIn: false};
        default:
            return state;
    }
};

export const SessionProvider = ({ children }) => {
    const [session, dispatch ] = useReducer(sessionReducer, initialSession);

    useEffect(() => {
        const restoreSession = async () => {
            try {
                const response = await restoreCSRF();
                const data = response.json();
                dispatch({type: "LOGIN", user: data.user});
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
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
            console.error(error);
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
            console.error(error);
            throw error;
        }
    }
}

export const useSession = () => {
    const context = useContext(SessionContext);

    if (!context) {
        throw new Error('useSession must be used in a SessionProvider');
    }

    return context;
};
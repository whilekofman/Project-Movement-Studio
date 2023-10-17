const sessionReducer = (state, action) => {

    switch (action.type) {
        case 'LOGIN':
            sessionStorage.setItem("currentUser", JSON.stringify(action.user));
            return {...state, user: action.user, isLoggedIn: true};
        case 'LOGOUT':
            sessionStorage.removeItem("currentUser");
            return {...state, user: null, isLoggedIn: false};
        default:
            return state;
    }
};

export default sessionReducer;
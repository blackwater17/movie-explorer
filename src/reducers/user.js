const userReducerDefaultState = {username: "", logged:false}

const userReducer = (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                username: action.username,
                logged: action.logged
            };
        default:
            return state;
    };
};

export default userReducer;
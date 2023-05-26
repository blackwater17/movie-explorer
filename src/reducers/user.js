const userReducerDefaultState = {}

const userReducer = (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                username: action.username,
                logged: action.username
            };
        default:
            return state;
    };
};

export default userReducer;
const moviesReducerDefaultState = [];

const moviesReducer = (state = moviesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_MOVIE":
            return [
                ...state,
                action.movie
            ];
        case "ADD_ALL_MOVIES":
            return action.movies;
        default:
            return state;
    }
}

export default moviesReducer;
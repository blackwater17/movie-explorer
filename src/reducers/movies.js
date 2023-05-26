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
            // return action.movies.map(obj => {
            //     return {...obj};
            // })
        default:
            return state;
    }
}

export default moviesReducer;
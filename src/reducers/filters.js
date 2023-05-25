const filtersReducerDefaultState = {
    year: null,
    genre: null,
    order: null
}       

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "EDIT_YEAR":
            return {
                ...state,
                year: action.year,
            }
        case "EDIT_GENRE":
            return {
                ...state,
                genre: action.genre
            }
        case "EDIT_ORDER":
            return {
                ...state,
                order: action.order
            }
        default:
            return state;
    }
}

export default filtersReducer;
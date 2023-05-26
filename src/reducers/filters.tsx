interface FiltersState {
    year:  string | null; /* full date format */
    genre: string | null;
    order: string | null;
  }
  
  type FiltersAction =
    | { type: "EDIT_YEAR"; year: string | null }
    | { type: "EDIT_GENRE"; genre: string | null }
    | { type: "EDIT_ORDER"; order: string | null };
  
  const filtersReducerDefaultState: FiltersState = {
    year: null,
    genre: null,
    order: null
  };
  
  const filtersReducer = (
    state: FiltersState = filtersReducerDefaultState,
    action: FiltersAction
  ): FiltersState => {
    switch (action.type) {
      case "EDIT_YEAR":
        return {
          ...state,
          year: action.year
        };
      case "EDIT_GENRE":
        return {
          ...state,
          genre: action.genre
        };
      case "EDIT_ORDER":
        return {
          ...state,
          order: action.order
        };
      default:
        return state;
    }
  };
  
  export default filtersReducer;
  
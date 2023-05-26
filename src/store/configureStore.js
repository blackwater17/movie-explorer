import { createStore, combineReducers } from 'redux';
import moviesReducer from '../reducers/movies'
import filtersReducer from '../reducers/filters';
import userReducer from '../reducers/user';

export default () => {
    const store = createStore(
        combineReducers({
            movies: moviesReducer,
            filters: filtersReducer,
            user: userReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}

import { createStore, combineReducers } from 'redux';
import moviesReducer from '../reducers/movies'
import filtersReducer from '../reducers/filters';
import userReducer from '../reducers/user';

const rootReducer = combineReducers({
    movies: moviesReducer,
    filters: filtersReducer,
    user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default () => {
    const store = createStore(
        rootReducer,
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store
}
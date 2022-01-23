import { createStore, combineReducers } from 'redux';
import { CursusReducers } from './CursusReducers.js';
import { ToetsReducers } from './ToetsReducers.js';

const rootReducer = combineReducers(
    {
        courseReducer: CursusReducers,
        toetsReducer: ToetsReducers
    }
)
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

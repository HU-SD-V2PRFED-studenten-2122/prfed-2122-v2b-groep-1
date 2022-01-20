import { createStore, combineReducers } from 'redux';
import { CursusReducers } from './cursus/CursusReducers.js';
import { ToetsActionns } from './toets/ToetsActions.js';

const rootReducer = combineReducers(
    {
        cursusReducer: CursusReducers,
        toetsActionns: ToetsActionns
    }
)
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

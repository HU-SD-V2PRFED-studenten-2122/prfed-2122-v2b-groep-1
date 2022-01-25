
import { createStore, combineReducers } from 'redux';
import { UserReducers} from "./UserReducers";

const rootReducer = combineReducers(
    {
        userReducer: UserReducers
    }
)
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
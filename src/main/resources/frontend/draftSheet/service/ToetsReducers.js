import { ADD_TOETS, UPDATE_TOETS, DELETE_TOETS } from './ToetsActions';

const initialState = {
    toetsen: []
}

export const ToetsReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TOETS:
            return {
                ...state,
                toetsen: [...state.toetsen, action.toets]
            };
        case UPDATE_TOETS:
            return {
                ...state,
                toetsen: state.toetsen.map(
                    (toets) => {
                        if (toets.id === action.toetsId) {
                            toets.naamToets = action.naamToets;
                            toets.wegingToets = action.wegingToets;
                            toets.aantalEcToets = action.aantalEcToets;
                        }
                        return toets;
                    }
                )
            };
        case DELETE_TOETS:
            return {
                ...state,
                toetsen: state.toetsen.filter(
                    (toets) => toets.id !== action.toetsId
                )
            };
        default:
            return state;
    }
}

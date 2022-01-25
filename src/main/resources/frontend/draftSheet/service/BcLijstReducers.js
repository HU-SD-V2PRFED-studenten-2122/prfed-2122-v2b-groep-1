import {ADD_RIJ, REMOVE_RIJ, ADD_GEVULDE_RIJ} from "./bcLijstActions";
import {createSelector} from "@reduxjs/toolkit";

let initialState = {
    cursussen: []
}

export const BcLijstReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RIJ:
            return {
                ...state,
                cursussen: [...state.cursussen, action.cursussen]
            };

        case REMOVE_RIJ: {
            return {

            };
        }

        case ADD_GEVULDE_RIJ: {
            return {
                ...state,
                cursussen: [...state.cursussen, action.cursussen]
            };
        }

        default: {
            return state
        }
    }
}

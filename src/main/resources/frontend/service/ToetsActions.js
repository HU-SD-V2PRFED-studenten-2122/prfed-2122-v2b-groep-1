export const ADD_TOETS = 'ADD_TOETS';
export const DELETE_TOETS = 'DELETE_TOETS';
export const UPDATE_TOETS = 'UPDATE_TOETS';

export const addToets = (toets) => {
    return {
        type: ADD_TOETS,
        toets: toets
    }
}

export const updateToets = (id, naam, weging, aantalEc) => {
    return {
        type: UPDATE_TOETS,
        toetsId: id,
        naamToets: naam,
        wegingToets: weging,
        aantalEcToets: aantalEc
    }
}

export const deleteToets = (id) => {
    return {
        type: DELETE_TOETS,
        toetsId: id
    }
}

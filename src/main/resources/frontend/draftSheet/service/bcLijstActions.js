export const ADD_RIJ = 'ADD_RIJ';
export const REMOVE_RIJ = 'REMOVE_RIJ';
export const ADD_GEVULDE_RIJ = 'ADD_GEVULDE_RIJ'

export const addRij = () => {
    return {
        type: ADD_RIJ
    }
}

export const removeRij = (rijNummer) => {
    return {
        type: REMOVE_RIJ,
        rijNummer
    }
}

export const gevuldeRij = cursus => {
    return {
        type: ADD_GEVULDE_RIJ,
        cursussen: cursus
    }
}

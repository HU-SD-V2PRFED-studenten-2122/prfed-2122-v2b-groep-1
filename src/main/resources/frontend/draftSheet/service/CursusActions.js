export const ADD_CURSUS = 'ADD_CURSUS';
export const DELETE_CURSUS = 'DELETE_CURSUS';
export const UPDATE_CURSUS = 'UPDATE_CURSUS';
export const ADD_TOETS_CURSUS = 'ADD_TOETS_CURSUS';
export const ADD_NIEUWE_CURSUS = 'ADD_NIEUWE_CURSUS';
export const DELETE_COURSE_TEST = 'DELETE_COURSE_TEST';
export const DELETE_NEW_CURSUS = "DELETE_NEW_CURSUS"

export const addCursus = (cursus) => {
    return {
        type: ADD_CURSUS,
        cursus: cursus
    }
}

export const updateCursus = (cursusId, code, naam, aantalEc, bezemOfConversie,periode, coordinator ,oudeCursus,  opmerkingen, leerjaar,  draft, toetsen) => {
    return {
        type: UPDATE_CURSUS,
        cursusId: cursusId,
        code: code,
        naamCursus: naam,
        aantalEcCursus: aantalEc,
        bezemOfConversie: bezemOfConversie,
        periode: periode,
        coordinator: coordinator,
        oudeCursus: oudeCursus,
        opmerkingen: opmerkingen,
        leerjaar: leerjaar,
        draft: draft,
        toetsen: toetsen
    }
}

export const deleteCursus = (id) => {
    return {
        type: DELETE_CURSUS,
        cursusId: id
    }
}

export const addToetsCursus = (id, toets) => {
    return {
        type: ADD_TOETS_CURSUS,
        cursusId: id,
        toets: toets
    }
}

export const deletetoetsCursus = (id, toetsId) => {
    return {
        type: DELETE_COURSE_TEST,
        cursusId: id,
        toets: toetsId
    }
}

export const addNieuweCursus = (id, cursus) => {
    return {
        type: ADD_NIEUWE_CURSUS,
        cursusId: id,
        cursus: cursus
    }
}

export const deleteNewCursus = (id, cursusId) => {
    return {
        type: DELETE_NEW_CURSUS,
        cursusId: id,
        newCursusId: cursusId
    }
}

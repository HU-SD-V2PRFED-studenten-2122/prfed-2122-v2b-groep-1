export const ADD_CURSUS = 'ADD_CURSUS';
export const DELETE_CURSUS = 'DELETE_CURSUS';
export const UPDATE_CURSUS = 'UPDATE_CURSUS';

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

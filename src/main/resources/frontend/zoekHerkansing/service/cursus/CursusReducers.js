import { ADD_CURSUS, UPDATE_CURSUS, DELETE_CURSUS } from './CursusActions';

const initialState = {
    cursussen: []
}

export const CursusReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURSUS:
            return {
                ...state,
                cursussen: [...state.cursussen, action.cursus]
            };
        case UPDATE_CURSUS:
            return {
                ...state,
                cursussen: state.cursussen.map(
                    (cursus) => {
                        if (cursus.id === action.cursusId) {
                            cursus.code = action.code;
                            cursus.naamCursus = action.naamCursus;
                            cursus.aantalEcCursus = action.aantalEcCursus;
                            cursus.bezemOfConversie = action.bezemOfConversie;
                            cursus.periode = action.periode;
                            cursus.coordinator = action.coordinator;
                            cursus.oudeCursus = action.oudeCursus;
                            cursus.opmerkingen = action.opmerkingen;
                            cursus.leerjaar = action.leerjaar;
                            cursus.draft = action.draft;
                            cursus.toetsen = action.toetsen;
                        }
                        return cursus;
                    }
                )
            };
        case DELETE_CURSUS:
            return {
                ...state,
                cursussen: state.cursussen.filter(
                    (cursus) => cursus.id !== action.cursusId
                )
            };
        default:
            return state;
    }
}

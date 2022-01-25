import {
    ADD_CURSUS,
    ADD_NIEUWE_CURSUS,
    ADD_TOETS_CURSUS,
    DELETE_COURSE_TEST,
    DELETE_CURSUS,
    DELETE_NEW_CURSUS,
    UPDATE_CURSUS
} from './CursusActions';

let initialState = {
    courses: []
}



export const CursusReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURSUS:
            return {
                ...state,
                courses: [...state.courses, action.cursus]
            };

        case UPDATE_CURSUS:
            return {
                ...state,
                courses: state.courses.map(
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
                courses: state.courses.filter(
                    (cursus) => cursus.id !== action.cursusId
                )
            };
        case ADD_TOETS_CURSUS:
            return {
                ...state,
                courses: state.courses.map(
                    (cursus) => {
                        if (cursus.id === action.cursusId) {
                            let toetsen = []
                            if (cursus.toetsen != null) {
                                toetsen = cursus.toetsen;
                            }
                            toetsen.push(action.toets);
                            cursus.toetsen = toetsen;
                        }
                        return cursus;
                    }
                )
            };
        case ADD_NIEUWE_CURSUS:
            return {
                ...state,
                courses: state.courses.map(
                    (cursus) => {
                        if (cursus.id === action.cursusId) {
                            let cursussen = []
                            if (cursus.nieuweCursussen != null) {
                                cursussen = cursus.nieuweCursussen;
                            }
                            cursussen.push(action.cursus);
                            cursus.nieuweCursussen = cursussen;


                        }
                        return cursus;
                    }
                )
            };
        case DELETE_COURSE_TEST:
            return {
                ...state,
                courses: state.courses.map(
                    (cursus) => {
                        if (cursus.id === action.cursusId) {
                            cursus.toetsen = cursus.toetsen.filter(
                                (toets) => toets.id !== action.toets
                            )
                        }
                        return cursus;
                    }
                )
            };
        case DELETE_NEW_CURSUS:
            return {
                ...state,
                courses: state.courses.map(
                    (cursus) => {
                        if (cursus.id === action.cursusId) {
                            cursus.nieuweCursussen = cursus.nieuweCursussen.filter(
                                (newCursus) => newCursus.id !== action.newCursusId
                            )
                        }
                        return cursus;
                    }
                )
            };
        default:
            return state;
    }
}

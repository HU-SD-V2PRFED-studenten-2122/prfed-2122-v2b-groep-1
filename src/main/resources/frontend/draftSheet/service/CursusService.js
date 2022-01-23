import { store } from './Appservice';
import { addCursus as addCourse,
    deleteCursus as deleteCourse,
    updateCursus as updateCourse,
    addToetsCursus as addTestCourse,
    deletetoetsCursus as deleteTestCourse,
    addNieuweCursus as addNewCourse,
    deleteNewCursus as deleteNewCourse} from './CursusActions';

export class CursusService {
    constructor() {}

    addCursus(cursus) {
        store.dispatch(addCourse(cursus));
    }

    deleteCursus(cursusId) {
        store.dispatch(deleteCourse(cursusId));
    }

    updateCursus(cursusId, code, naam, aantalEc, bezemOfConversie,periode, coordinator ,oudeCursus,  opmerkingen, leerjaar,  draft, toetsen) {
        store.dispatch(updateCourse(cursusId, code, naam, aantalEc, bezemOfConversie,periode, coordinator ,oudeCursus,  opmerkingen, leerjaar,  draft, toetsen));
    }

    addToetsCursus(cursusId, toets) {
        store.dispatch(addTestCourse(cursusId, toets));

    }

    deletetoetsCursus(cursusId, toetsId) {
        store.dispatch(deleteTestCourse(cursusId, toetsId));

    }

    addNieuweCursus(cursusId, cursus) {
        store.dispatch(addNewCourse(cursusId, cursus))
    }

    deleteNewCursus(oldId, newId) {
        store.dispatch(deleteNewCourse(oldId, newId));

    }





}

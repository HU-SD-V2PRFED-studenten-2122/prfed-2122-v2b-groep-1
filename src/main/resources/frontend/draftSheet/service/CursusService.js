import { store } from './Appservice';
import { addCursus as addCourse,
    deleteCursus as deleteCourse,
    updateCursus as updateCourse } from './CursusActions';

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

}

import { store } from './Appservice';
import { addToets as addTest,
    deleteToets as deleteTest,
    updateToets as updateTest } from './ToetsActions';

export class ToetsService {
    constructor() {}

    addToets(toets) {
        store.dispatch(addTest(toets));
    }

    updateToets(toets) {
        store.dispatch(updateTest(toets));
    }

    deleteToets(toetsId) {
        store.dispatch(deleteTest(toetsId))

    }

}

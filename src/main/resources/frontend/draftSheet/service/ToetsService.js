import { store } from '/AppService';
import { addToets as addTest,
    deleteToets as deleteTest,
    updateToets as updateTest } from './ToetsActions';

export class ToetsService {
    constructor() {}

    addToets(toets) {
        store.dispatch(addTest(toets));
    }

    updateToets(toets) {
        store.dispatch(deleteTest(toets));
    }

    deleteToets(toetsId) {
        store.dispatch(updateTest(toetsId));
    }

}

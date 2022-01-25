import { store } from "./Appservice";
import {addRij, gevuldeRij, removeRij} from "./bcLijstActions";

export class bcLijstService {

    voegRijToe () {
        store.dispatch(addRij)
    }

    verwijderRij (rij) {
        store.dispatch(removeRij(rij))
    }

    voegGevuldeRijToe (cursus) {
        store.dispatch(gevuldeRij(cursus))
    }
}

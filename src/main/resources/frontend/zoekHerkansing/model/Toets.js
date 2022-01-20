import {v4 as uuidv4} from 'uuid';

export class Toets {

    id;

    constructor(naam, weging, aantalEc) {

        this.id = uuidv4(); // used to generate a unieke identifier
        this.naamToets = naam;
        this.wegingToets = weging;
        this.aantalEcToets = aantalEc;
    }
}


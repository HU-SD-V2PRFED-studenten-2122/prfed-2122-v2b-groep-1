import {v4 as uuidv4} from 'uuid';

export class User{
    id;

    constructor(naam, wachtwoord) {
        this.id = uuidv4();
        this.naam = naam;
        this.wachtwoord = wachtwoord;
    }
}
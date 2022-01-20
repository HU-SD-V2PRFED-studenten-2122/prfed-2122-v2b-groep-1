import {v4 as uuidv4} from 'uuid';

export class Cursus {

    id;



    constructor(code, naam, aantalEc, bezemOfConversie, periode, coordinator, oudeCursus, opmerkingen, leerjaar, draft, toetsen) {

        this.id = uuidv4(); // used to generate a unieke identifier
        this.code = code;
        this.naamCursus = naam;
        this.aantalEcCursus = aantalEc;
        this.bezemOfConversie = bezemOfConversie;
        this.periode = periode;
        this.coordinator = coordinator;
        this.oudeCursus = oudeCursus;
        this.opmerkingen = opmerkingen;
        this.leerjaar = leerjaar;
        this.draft = draft;
        this.toetsen = toetsen;
    }


}

import { LitElement, html, css } from "lit";
import {bcLijstService} from "../service/bcLijstService";
import {connect} from "pwa-helpers";
import {store} from "../service/Appservice.js";
import {Cursus} from "../model/Cursus";

export class BcLijst extends connect(store)(LitElement) {


    static styles = css`
    
    table, th, td {
        border:1px solid black;
        padding: 10px;
        margin: 40px;
        margin-bottom: 2px;
    }
    
    th {
        background-color: grey;
    }
    
    button {
        margin-left: 40px;
        margin-bottom: 15px;
    }
    
    .cell-knop {
        background-color: white;
        border: 3px solid white;
        border-bottom-color: #b4b4b4;
        border-right-color: #b4b4b4;
        border-top-color: #dedede;
        border-left-color: #dedede;
    }
    
    .cell-knop:hover {
        background-color: #b4b4b4;
        border-bottom-color: #dedede;
        border-right-color: #dedede;
        border-top-color: #b4b4b4;
        border-left-color: #b4b4b4;
    }
       
       
  `;

    static get properties() {
        return {
            cursussen: {
                type: Array
            }
        }
    }

    constructor() {
        super();
        this.cursussen = [];
        this.bcLijstService = new bcLijstService();
    }

    stateChanged(state) {

        let oudAantal = this.cursussen.length;
        this.cursussen = state.bcLijstReducer.cursussen;
        let aantal = this.cursussen.length;

        if (aantal > 0 && oudAantal < aantal) {
            this.voegGevuldeRijToe(this.cursussen[this.cursussen.length - 1])
        }
    }

    render(){
        return html`
            <div>
                <table id="bc-lijst">
                    <tr>
                        <th>oudecursus</th>
                        <th>cursusnaam</th>
                        <th>Ec-cursus</th>
                        <th>toets & toetsvorm</th>
                        <th>weging</th>
                        <th>ec-toets</th>
                        <th>bezem/conversie</th>
                        <th>nieuwe code</th>
                        <th>naam</th>
                        <th>ec-cursus</th>
                        <th>toets & toetsvorm</th>
                        <th>weging</th>
                        <th>ec-toets</th>
                        <th>periodes</th>
                        <th>coordinator</th>
                        <th>opmerkingen</th>
                    </tr>
                </table>
                <button @click="${this.nieuweRij}" >+</button>
            </div>    
        `;
    }

    nieuweRij () {

        const tbody = this.shadowRoot.querySelector('tbody');
        let row = document.createElement('tr');
        for (let i = 0; i < 16; i++) {
            let cell = document.createElement('td')
            cell.setAttribute('contenteditable', 'true')
            row.appendChild(cell);
        }
        let cell = document.createElement('td')
        cell.innerText = '-'
        cell.classList.add('cell-knop');
        cell.setAttribute('tabindex', '0');
        row.appendChild(cell);
        tbody.appendChild(row);

        cell.addEventListener('click', function () {
            tbody.deleteRow(row.rowIndex)
        })
        return row
    }

    voegGevuldeRijToe (cursus) {
        let row = this.nieuweRij();

        let wegingen = [];
        let ecs = [];
        let toetsnamen = [];

        if (cursus.toetsen != null) {
            for(let toets of cursus.toetsen) {
                wegingen.add(toets.wegingToets);
                ecs.add(toets.aantalEcToets);
                toetsnamen.add(toets.naamToets);
            }
        }

        let codes = [];
        let namen = [];
        let cecs = [];
        let ctoetsen = [];
        let cwegingen = [];
        let ctecs = [];

        if (cursus.nieuweCursussen != null) {
            for (let nieuwecursus of cursus.nieuweCursussen) {

                codes.add(nieuwecursus.code)
                namen.add(nieuwecursus.naamCursus)
                cecs.add(nieuwecursus.aantalEcCursus)

                if (nieuwecursus.toetsen != null) {
                    for(let toets of nieuwecursus.toetsen) {
                        cwegingen.add(toets.wegingToets);
                        ctecs.add(toets.aantalEcToets);
                        ctoetsen.add(toets.naamToets);
                    }
                }
            }
        }

        row.cells.item(0).innerText = cursus.code;
        row.cells.item(1).innerText = cursus.naamCursus;
        row.cells.item(2).innerText = cursus.aantalEcCursus;
        row.cells.item(3).innerText = toetsnamen.toString();
        row.cells.item(4).innerText = wegingen.toString();
        row.cells.item(5).innerText = ecs.toString();
        row.cells.item(6).innerText = cursus.bezemOfConversie;
        row.cells.item(7).innerText = codes.toString();
        row.cells.item(8).innerText = namen.toString();
        row.cells.item(9).innerText = cecs.toString();
        row.cells.item(10).innerText = ctoetsen.toString();
        row.cells.item(11).innerText = cwegingen.toString();
        row.cells.item(12).innerText = ctecs.toString();
        row.cells.item(13).innerText = cursus.periode;
        row.cells.item(14).innerText = cursus.coordinator;
    }

}

customElements.define('bc-lijst', BcLijst);

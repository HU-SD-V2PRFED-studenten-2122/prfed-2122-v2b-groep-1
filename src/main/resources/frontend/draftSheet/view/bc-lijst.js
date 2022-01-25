import { LitElement, html, css } from "lit";
import {bcLijstService} from "../../service/bcLijstService";
import {connect} from "pwa-helpers";
import {store} from "../../service/Appservice.js";
import {Cursus} from "../../model/Cursus";

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
    
    #zoek-knop {
        background-color: #7fbaf5;
        border: none;
        width: 100px;
        height: 46px;
        padding: 10px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        font-size: 16px;
    }
        
    #zoek-knop:hover {
        background-color: #6ca0d4;
    }
    
    #zoek-balk {
        border: none;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        width: 250px;
        margin-left: 20px;
        height: 44px;
        padding-left: 5px;
        font-size: 15px;
        background-color: #cccccc;
    }
    
    label {
        display: block;
        padding-left: 20px;
        margin-top: 20px;
        margin-bottom: 7px;
        font-family: Avenir LT W01_85 Heavy1475544,Avenir,Arial,sans-serif;
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
            <label>
                <label for="zoek-balk">Zoek in de bezem/conversie sheet.</label>
                <input type="text" id="zoek-balk" name="zoekbalk-bezem-conversie-sheet">
                <button id="zoek-knop" name="zoek-knop" @click="${this.zoekFunctie}">Zoek</button>
            </label>
            
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
        row.classList.add('rij');

        let code = document.createElement('td');
        code.setAttribute('contenteditable', 'true')
        code.classList.add('code')
        row.appendChild(code)

        for (let i = 0; i < 15; i++) {
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

    zoekFunctie() {
        let input, filter, sheet, tr, code, i, textValue;

        input = this.shadowRoot.getElementById('zoek-balk');
        filter = input.value.toUpperCase();
        sheet = this.shadowRoot.getElementById('bc-lijst');
        tr = sheet.getElementsByClassName('rij');

        for (i = 0; i < tr.length; i++) {
            code = tr[i].getElementsByClassName('code')[0];
            textValue = code.textContent || code.innerText;

            if (textValue.toUpperCase().indexOf(filter) > -1 && input.value !== '' && input.value !== '-') {
                if (i % 2 === 0) {
                    tr[i].style.backgroundColor = '#f5d7d7';
                } else {
                    tr[i].style.backgroundColor = '#c5e1f3';
                }
            }
            else if (input.value === '' || input.value === ' ' || input.value === '-') {
                if (i % 2 === 0) {
                    tr[i].style.backgroundColor = '#dddddd';
                } else {
                    tr[i].style.backgroundColor = 'white';
                }
            }
            else {
                tr[i].style.backgroundColor = 'white';
            }
        }
    }
}

customElements.define('bc-lijst', BcLijst);

import {css, html, LitElement} from "lit";
import {CursusService} from "../../service/CursusService";
import {Toets} from "../../model/Toets";
import {ToetsService} from "../../service/ToetsService";


export class addToets extends LitElement {

    static get properties() {
        return {

            cursusId: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.cursusService = new CursusService();
        this.toetsService = new ToetsService();
    }

    static styles = css`
        #add-toets {
            width: 90%;
            height: 280px;
            background-color:#d9d8d8;
            margin-left: 30px;
            margin-top: 20px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
            
            
            }
        
        input, select {
            width: 95%;
            background-color:#d9d8d8;
            display: block;
            border: none;
            border-bottom: 2px solid #00a1e1;
            padding: 5px 0;
            color: #222;
            margin: 10px 32px 10px 3px;
            font-family: 'Roboto Slab'; }
            input:focus, select:focus {
            color: #222;
            border-bottom: 2px solid #00a1e1;
        }
        
        .cursus-button {
            background-color: #7fbaf5;
            border: none;
            padding: 5px;
            border-radius: 5px;
            font-size: 16px;
        }
        
        .cursus-button:hover {
            background-color: grey;
        }
        
        .visually-hidden {
            display: none;
        }
     `;



    render(){

        return html`
            <div id="add-toets" >
                <h3>Voeg toets toe</h3>
                <form id="formOudeToets" onsubmit="return false">
                    <label for="toets-naam">toets naam</label>
                    <input type="text" class="maakCursus" id="toets-naam" name="toets-naam" required>
                    <label for=" ">weging toets</label>
                    <input type="number"  class="maakCursus" id="weging-toets" name="weging-toets" required>
                    <label for="ec-toets">ec toets</label>
                    <input type="number" class="maakCursus" step="0.5" id="ec-toets" name="aantal-ec-voor-toets" required>
                    <button type="submit" class="cursus-button" id="add-toets-button" @click="${this.clickHandler}" >add toets</button>
                </form>
            </mwc-div>
            
            
        `;




    }

    clickHandler() {
        //const form = this.shadowRoot.querySelector('#formOudeToets')
        //form.addEventListener('submit', event => {event.preventDefault()})

        var naam = this.shadowRoot.querySelector('#toets-naam').value;
        var weging = this.shadowRoot.querySelector('#weging-toets').value;
        var ec = this.shadowRoot.querySelector('#ec-toets').value;

        this.addToets(naam, weging, ec);
    }

    addToets(naam, weging, ec) {
        const newToets = new Toets(naam,weging,ec);
        this.toetsService.addToets(newToets)
        this.cursusService.addToetsCursus(this.cursusId, newToets)

        this.shadowRoot.querySelector('#toets-naam').value = '';
        this.shadowRoot.querySelector('#weging-toets').value = '';
        this.shadowRoot.querySelector('#ec-toets').value = '';
    }

}

customElements.define('add-toets', addToets)

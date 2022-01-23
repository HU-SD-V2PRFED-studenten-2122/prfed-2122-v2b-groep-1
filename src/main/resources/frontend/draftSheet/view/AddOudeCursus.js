import {css, html, LitElement} from "lit";
import {Cursus} from "../model/Cursus";
import {CursusService} from "../service/CursusService";
import {toetsenList} from "./toetsen-list";


export class AddOudeCursus extends LitElement {

    static styles = css`
        #oudeCursusDialog {
            border: 0.5rem outset #00a1e1;
            width: 40%;
            height: 700px;
            }
        input, select {
            width: 100%;
            display: block;
            border: none;
            border-bottom: 2px solid #00a1e1;
            padding: 5px 0;
            color: #222;
            margin-bottom: 31px;
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
     `;

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
    }

    render(){
        return html`
            <button class="cursus-button" @click="${this.openDialog}">voeg cursus toe</button>
            
            <dialog id="oudeCursusDialog">
                <h2>Voer oude Cursus in</h2>
                <form id="form1" onsubmit="return false">
                    <label for="cursus-code"></label>
                    <input required type="text" class="maakCursus" id="cursus-code" name="cursus-code" placeholder="Cursus Code">
                    <label for="cursus-naam"></label>
                    <input required type="text" class="maakCursus" id="cursus-naam" name="cursus-naam" placeholder="Cursus Naam">
                    <label for="ec-cursus"></label>
                    <input required type="number" class="maakCursus" step="0.5" id="ec-cursus" name="aantal-ec-voor-cursus" placeholder="EC-Cursus">
                    <label for="bezem-conversie"></label>
                    <select required id="bezem-conversie" class="maakCursus" name="bezem-of-conversie" >
                        <option value="" disabled selected hidden>bezem/conversie</option>
                        <option>bezem</option>
                        <option>conversie</option>
                    </select>
                    <button class="cursus-button" @click="${this.clickHandler}" id="open-toets-scherm-button">Add Toets</button>
                </form>
                
                <toetsen-list id="toetsen-list" cursusId="${this.cursusId}"></toetsen-list>
                <add-toets cursusId="${this.cursusId}"  id="add-toets-component" ></add-toets>
                <cursussen-list oldCursusId="${this.cursusId}"></cursussen-list>
                <add-nieuwe-cursus oldCursusId="${this.cursusId}" ></add-nieuwe-cursus>
                
                <button class="cursus-button" @click="${this.closeDialog}">cancel</button>
                <button class="cursus-button" @click="${this.submit}">Submit</button>
            </dialog>
        `;
    }

    openDialog() {
        this.shadowRoot.querySelector("#oudeCursusDialog").showModal()
        this.cursusId = ''
        this.shadowRoot.querySelector("#add-toets-component").setAttribute("hidden", true)
        this.shadowRoot.querySelector("#open-toets-scherm-button").removeAttribute("hidden")
    }

    closeDialog() {
        this.shadowRoot.querySelector('#toetsen-list')
        this.shadowRoot.querySelector('#cursus-code').value = ''
        this.shadowRoot.querySelector('#cursus-naam').value = ''
        this.shadowRoot.querySelector('#ec-cursus').value = ''
        this.shadowRoot.querySelector('#bezem-conversie').value = ''
        this.cursusId = ''
        this.shadowRoot.querySelector("#oudeCursusDialog").close()

    }


    clickHandler() {

        this.shadowRoot.querySelector("#open-toets-scherm-button").setAttribute("hidden", true)
        this.shadowRoot.querySelector("#add-toets-component").removeAttribute("hidden")

        var code = this.shadowRoot.querySelector('#cursus-code').value;
        var naam = this.shadowRoot.querySelector('#cursus-naam').value;
        var ec = this.shadowRoot.querySelector('#ec-cursus').value;
        var bezemConversie = this.shadowRoot.querySelector('#bezem-conversie').value;

        this.addCursus(code,naam,ec,bezemConversie);
    }


    addCursus(code, naam, ec, bezemConversie) {
            const newCursus = new Cursus(code, naam, ec, bezemConversie, null, null, null, null, null, true, null);
            this.cursusService.addCursus(newCursus)
            this.cursusId = newCursus.id
    }

    submit() {
        //toevoegen aan de draft
        this.clickHandler()
        this.closeDialog()

    }
}

customElements.define('add-oude-cursus', AddOudeCursus)

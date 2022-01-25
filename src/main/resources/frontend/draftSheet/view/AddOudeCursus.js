import {css, html, LitElement} from "lit";
import {Cursus} from "../model/Cursus";
import {CursusService} from "../service/CursusService";
import {addNieuweCursus} from "./add-nieuwe-cursus.js";
import {bcLijstService} from "../service/bcLijstService"


export class AddOudeCursus extends LitElement {

    static styles = css`
        #oudeCursusDialog {
            border: 0.5rem outset #00a1e1;
            width: 40%;
            height: 900px;
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
        
        .visually-hidden {
            display: none;
        }
        
        #open-toets-scherm-button {
            display: block;
            margin-bottom: 20px;
         }
         
         #submit-button {
            display: block;
            margin-top: 20px;
         }
         
         #submit-button{
            display: inline-block;
         }
         
         
        
     `;

    static get properties() {
        return {
            cursusId: {
                type: String
            } ,
            cursus: {
                type: Object
            }
        }
    }

    constructor() {
        super();
        this.cursusService = new CursusService();
        this.bcLijstService = new bcLijstService();
    }

    render(){
        return html`
            
            <button class="cursus-button"  @click="${this.openDialog}"><span class="visually-hidden">voeg cursus toe dialoog</span>voeg cursus toe</button>
            
            <dialog id="oudeCursusDialog">
                <h2>Voer oude Cursus in</h2>
                
                <form id="form1" @submit="${this.clickHandler}">
                    <label for="cursus-code">Cursus Code</label>
                    <input required type="text" class="maakCursus" id="cursus-code" name="cursus-code">
                    <label for="cursus-naam" >cursus naam</label>
                    <input required type="text" class="maakCursus" id="cursus-naam" name="cursus-naam" >
                    <label for="ec-cursus">aantal-ec</label>
                    <input required type="number" class="maakCursus" step="0.5" id="ec-cursus" name="aantal-ec-voor-cursus" >
                    <label for="bezem-conversie">bezem/conversie</label>
                    <select required id="bezem-conversie" class="maakCursus" name="bezem-of-conversie" >
                        <option value="" disabled selected hidden></option>
                        <option>bezem</option>
                        <option>conversie</option>
                    </select>
                    
                    <button type="submit" @click="${this.toetsToevoegen}" class="cursus-button" id="open-toets-scherm-button"><span class="visually-hidden">voeg toets toe veld</span>toets toevoegen</button>
                    
                    
                    <label for="toetsen-list"><span class="visually-hidden">lijst met toetsen</span></label>
                    <toetsen-list id="toetsen-list" cursusId="${this.cursusId}"></toetsen-list>
                   
                    <add-toets cursusId="${this.cursusId}"  id="add-toets-component" ></add-toets>
                    <cursussen-list id="cursus-lsit" oldCursusId="${this.cursusId}"></cursussen-list>
                    <add-nieuwe-cursus oldCursusId="${this.cursusId}" ></add-nieuwe-cursus>

                    
                    <button type="submit" class="cursus-button" id="submit-button" @click="${this.submit}" >Submit</button>
                    <button class="cursus-button" @click="${this.closeDialog}">cancel</button>
                    
                    
                </form>

                
                
                
            </dialog>
            
        `;
    }

    openDialog() {

        const form = this.shadowRoot.querySelector("#form1")
        form.addEventListener('submit', event => {event.preventDefault()})

        this.shadowRoot.querySelector("#oudeCursusDialog").showModal()
        this.cursusId = ''
        this.shadowRoot.querySelector("#add-toets-component").setAttribute("hidden", true)
        this.shadowRoot.querySelector("#open-toets-scherm-button").removeAttribute("hidden")
    }

    closeDialog() {
        this.shadowRoot.querySelector('#cursus-code').value = ''
        this.shadowRoot.querySelector('#cursus-naam').value = ''
        this.shadowRoot.querySelector('#ec-cursus').value = ''
        this.shadowRoot.querySelector('#bezem-conversie').value = ''
        this.shadowRoot.querySelector("#submit-button").removeAttribute("submit")
        this.cursusId = ''
        this.shadowRoot.querySelector("#oudeCursusDialog").close()

    }
    toetsToevoegen(){
        this.shadowRoot.querySelector("#form1").removeAttribute("submit")
    }

    submit() {
        this.shadowRoot.querySelector("#form1").setAttribute("submit", true)
    }


    clickHandler() {
        this.shadowRoot.querySelector("#open-toets-scherm-button").setAttribute("hidden", true)
        this.shadowRoot.querySelector("#add-toets-component").removeAttribute("hidden")

        const code = this.shadowRoot.querySelector('#cursus-code').value;
        const naam = this.shadowRoot.querySelector('#cursus-naam').value;
        const ec = this.shadowRoot.querySelector('#ec-cursus').value;
        const bezemConversie = this.shadowRoot.querySelector('#bezem-conversie').value;


        this.addCursus(code,naam,ec,bezemConversie);


    }


    addCursus(code, naam, ec, bezemConversie) {
        const newCursus = new Cursus(code, naam, ec, bezemConversie, null, null, null, null, null, true, null);
        this.cursusService.addCursus(newCursus)
        this.cursusId = newCursus.id


        if (this.shadowRoot.querySelector("#form1").getAttribute("submit") !== null) {
            this.bcLijstService.voegGevuldeRijToe(newCursus);
            this.closeDialog()
        }



    }

}

customElements.define('add-oude-cursus', AddOudeCursus)

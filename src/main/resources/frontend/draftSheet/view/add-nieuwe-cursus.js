import {css, html, LitElement} from "lit";
import {Cursus} from "../model/Cursus";
import {CursusService} from "../service/CursusService";
import {bcLijstService} from "../service/bcLijstService"


class addNieuweCursus extends LitElement {

    static styles = css`
       
        #nieuweCursusDialog {
            border: 0.5rem outset #00a1e1;
            width: 40%;
            height: 700px;
            
            }
        
        .maakCursus {
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

            newCursusId: {
                type: String
            },
            oldCursusId: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.cursusService = new CursusService();
        this.newCursusId = null
        this.bcLijstService = new bcLijstService();

    }

    render(){
        return html`
            <dialog id="nieuweCursusDialog">
                <h2>Voer nieuwe Cursus in</h2>
                
                <form onsubmit="return false">
                    <label for="cursus-code"></label>
                    <input type="text" id="cursus-code" class="maakCursus" name="cursus-code" placeholder="Cursus Code">
                    <label for="cursus-naam"></label>
                    <input type="text" class="maakCursus" id="cursus-naam" name="cursus-naam" placeholder="Cursus Naam">
                    <label for="ec-cursus"></label>
                    <input type="number" class="maakCursus" step="0.5" id="ec-cursus" name="aantal-ec-voor-cursus" placeholder="EC-cursus">
                    <label for="cursus-coordinator"></label>
                    <input type="text" class="maakCursus" id="cursus-coordinator" name="cursus-coordinator" placeholder="cursus coördinator">
                    <label for="bezem-conversie"></label>
                    <select required id="bezem-conversie" class="maakCursus" name="bezem-of-conversie" >
                        <option value="" disabled selected hidden>bezem/conversie</option>
                        <option>bezem</option>
                        <option>conversie</option>
                    </select>
                    
                    
                    <p>blok</p>
                    <label for="blok-a">A</label>
                    <input type="checkbox" id="blok-a" name="blok" value="A">
                    <label for="blok-b">B</label>
                    <input type="checkbox" id="blok-b" name="blok" value="B">
                    <label for="blok-c">C</label>
                    <input type="checkbox" id="blok-c" name="blok" value="B">
                    <label for="blok-d">D</label>
                    <input type="checkbox" id="blok-d" name="blok" value="A">
                    <label for="blok-e">E</label>
                    <input type="checkbox" id="blok-e" name="blok" value="A">

                    <button  type="submit" class="cursus-button" id="open-toets-scherm-button-n" @click="${this.clickHandler}">Add Toets</button>
                </form>
                
                <nieuwe-toetsen-list cursusId="${this.newCursusId}"></nieuwe-toetsen-list>
                <add-toets cursusId="${this.newCursusId}" id="add-toets-part"></add-toets>
                
                <button class="cursus-button"  @click="${this.closedialog}" >cancel</button>
                <button class="cursus-button"  @click="${this.closedialog}" >add</button>
                    
                
            </dialog>
            <button class="cursus-button"  @click="${this.openDialog}" >voeg cursus toe</button>
            

            
           
            
        `;
    }

    closedialog() {
        this.shadowRoot.querySelector("#nieuweCursusDialog").close()
    }

    openDialog() {
        this.shadowRoot.querySelector("#add-toets-part").setAttribute("hidden", true)
        this.shadowRoot.querySelector("#open-toets-scherm-button-n").removeAttribute("hidden")
        this.shadowRoot.querySelector("#nieuweCursusDialog").showModal()
    }

    clickHandler() {
        this.shadowRoot.querySelector("#open-toets-scherm-button-n").setAttribute("hidden", true)
        this.shadowRoot.querySelector("#add-toets-part").removeAttribute("hidden")

        const code = this.shadowRoot.querySelector('#cursus-code').value;
        const naam = this.shadowRoot.querySelector('#cursus-naam').value;
        const ec = this.shadowRoot.querySelector('#ec-cursus').value;
        const bezemConversie = this.shadowRoot.querySelector('#bezem-conversie').value;
        const coordinator = this.shadowRoot.querySelector('#cursus-coordinator').value;

        let checkboxes = this.shadowRoot.querySelectorAll('[name="blok"]:checked');
        var periodes = []
        for (var i=0; i<checkboxes.length; i++) {
            periodes.push(checkboxes[i].value);
        }

        this.addCursus(code,naam,ec,bezemConversie,periodes,coordinator);
    }


    addCursus(code, naam, ec, bezemConversie, periode, coordinator ) {
        const newCursus = new Cursus(code, naam, ec, bezemConversie, periode, coordinator, null, null, null, true, null);
        this.bcLijstService.voegGevuldeRijToe(newCursus);
        this.cursusService.addCursus(newCursus);
        this.cursusService.addNieuweCursus(this.oldCursusId, newCursus);
        this.newCursusId = newCursus.id

    }



}

customElements.define('add-nieuwe-cursus', addNieuweCursus)

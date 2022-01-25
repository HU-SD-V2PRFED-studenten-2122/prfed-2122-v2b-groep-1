import {css, html, LitElement} from "lit";
import {Cursus} from "../../model/Cursus";
import {CursusService} from "../../service/CursusService";



export class addNieuweCursus extends LitElement {

    static styles = css`
       
        #nieuweCursusDialog {
            border: 0.5rem outset #00a1e1;
            width: 40%;
            height: 900px;
            
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
        
        #nieuww-button {
            margin-top: 20px;
            display: block
            
        }
        
        #open-toets-scherm-button-n {
            display: block;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        
        #add-nieuwe-cursus-buttton{
            display: inline-block;
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


    }

    render(){
        return html`
            <dialog id="nieuweCursusDialog">
                <h2>Voer nieuwe Cursus in</h2>
                <form id="nieuwe-cursus-form" @submit="${this.clickHandler}">
                    <label for="cursus-code">cursus code</label>
                    <input required type="text" id="cursus-code" class="maakCursus" name="cursus-code">
                    <label for="cursus-naam">cursus naam</label>
                    <input required type="text" class="maakCursus" id="cursus-naam" name="cursus-naam">
                    <label for="ec-cursus">ec-cursus</label>
                    <input required type="number" class="maakCursus" step="0.5" id="ec-cursus" name="aantal-ec-voor-cursus" >
                    <label for="cursus-coordinator">cursus coordinator</label>
                    <input required type="text" class="maakCursus" id="cursus-coordinator" name="cursus-coordinator" >
                    <label for="bezem-conversie">bezem of conversie</label>
                    <select required id="bezem-conversie" class="maakCursus" name="bezem-of-conversie" >
                        <option value="" disabled selected hidden>bezem/conversie</option>
                        <option>bezem</option>
                        <option>conversie</option>
                    </select>
                    
                    
                    <p>blok</p>
                    <label for="blok-a">A</label>
                    <input  type="checkbox" id="blok-a" name="blok" value="a">
                    <label for="blok-b">B</label>
                    <input  type="checkbox" id="blok-b" name="blok" value="b">
                    <label for="blok-c">C</label>
                    <input  type="checkbox" id="blok-c" name="blok" value="c">
                    <label for="blok-d">D</label>
                    <input  type="checkbox" id="blok-d" name="blok" value="d">
                    <label for="blok-e">E</label>
                    <input  type="checkbox" id="blok-e" name="blok" value="e">

                    <button  @click="${this.toetsToevoegen}" type="submit" class="cursus-button" id="open-toets-scherm-button-n">Add Toets</button>

                    <nieuwe-toetsen-list cursusId="${this.newCursusId}"></nieuwe-toetsen-list>
                    <add-nieuwe-toets cursusId="${this.newCursusId}" id="add-toets-part1"></add-nieuwe-toets>

                    <button class="cursus-button" @click="${this.submit}" id="add-nieuwe-cursus-buttton" >add</button>
                    <button class="cursus-button"  @click="${this.closedialog}" >cancel</button>
                </form>
                
                
                    
                
            </dialog>
            <button type="submit" id="nieuww-button" class="cursus-button" @click="${this.openDialog}" >voeg nieuwe cursus toe</button>
        `;
    }

    closedialog() {
        this.newCursusId = null
        this.shadowRoot.querySelector('#cursus-code').value = '';
        this.shadowRoot.querySelector('#cursus-naam').value = '';
        this.shadowRoot.querySelector('#ec-cursus').value = '';
        this.shadowRoot.querySelector('#bezem-conversie').value = '';
        this.shadowRoot.querySelector('#cursus-coordinator').value = '';
        this.shadowRoot.querySelector('#blok-a').checked = false;
        this.shadowRoot.querySelector('#blok-b').checked = false;
        this.shadowRoot.querySelector('#blok-c').checked = false;
        this.shadowRoot.querySelector('#blok-d').checked = false;
        this.shadowRoot.querySelector('#blok-e').checked = false;


        this.shadowRoot.querySelector("#nieuweCursusDialog").close()
    }

    openDialog() {
        const form = this.shadowRoot.querySelector("#nieuwe-cursus-form")
        form.addEventListener('submit', event => {event.preventDefault()})

        this.shadowRoot.querySelector("#add-toets-part1").setAttribute("hidden", true)
        this.shadowRoot.querySelector("#open-toets-scherm-button-n").removeAttribute("hidden")
        this.shadowRoot.querySelector("#nieuweCursusDialog").showModal()
    }

    submit() {
        this.shadowRoot.querySelector("#nieuwe-cursus-form").setAttribute("submit", true)
    }

    toetsToevoegen(){
        this.shadowRoot.querySelector("#nieuwe-cursus-form").removeAttribute("submit")
    }

    clickHandler() {
        this.shadowRoot.querySelector("#open-toets-scherm-button-n").setAttribute("hidden", true)
        this.shadowRoot.querySelector("#add-toets-part1").removeAttribute("hidden")

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
        if (this.newCursusId === null) {

            this.addCursus(code,naam,ec,bezemConversie,periodes,coordinator);
        } else {
            this.closedialog()
        }





    }

    addCursus(code, naam, ec, bezemConversie, periode, coordinator ) {
        const newCursus = new Cursus(code, naam, ec, bezemConversie, periode, coordinator, null, null, null, true, null);

        this.cursusService.addCursus(newCursus);
        this.cursusService.addNieuweCursus(this.oldCursusId, newCursus);
        this.newCursusId = newCursus.id


        if (this.shadowRoot.querySelector("#add-nieuwe-cursus-buttton").getAttribute("submit") !== null) {
            this.closedialog()
        }
    }



}

customElements.define('add-nieuwe-cursus', addNieuweCursus)

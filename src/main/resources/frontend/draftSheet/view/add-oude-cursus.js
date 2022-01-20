import {css, html, LitElement} from "lit";
import {Cursus} from "../model/Cursus";
import {CursusService} from "../service/CursusService";


class addOudeCursus extends LitElement {

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
        
        #knoppen-oude-cursus {
            text-align: center;
        }
       
     `;


    constructor() {
        super();
        this.cursusService = new CursusService();

    }

    render(){
        return html`
            
                
            <dialog id="oudeCursusDialog">
                <h2>Voer oude Cursus in</h2>
                <form id="oudeCursusForm">
                    <label for="cursus-code"></label>
                    <input type="text" class="maakCursus" id="cursus-code" name="cursus-code" placeholder="Cursus Code">
                    <label for="cursus-naam"></label>
                    <input type="text" class="maakCursus" id="cursus-naam" name="cursus-naam" placeholder="Cursus Naam">
                    <label for="ec-cursus"></label>
                    <input type="number" class="maakCursus" step="0.5" id="ec-cursus" name="aantal-ec-voor-cursus" placeholder="EC-Cursus">
                    <label for="bezem-conversie"></label>
                    <select id="bezem-conversie" class="maakCursus" name="bezem-of-conversie" >
                        <option value="" disabled selected hidden>bezem/conversie</option>
                        <option>bezem</option>
                        <option>conversie</option>
                    </select>
                    
                    <toetsen-list></toetsen-list>
                    <add-toets></add-toets>
                    


                    <cursussen-list></cursussen-list>
                    <add-nieuwe-cursus></add-nieuwe-cursus>
                </form>

                <button class="cursus-button" @click="${this.closeDialog}">cancel</button>
                <button class="cursus-button" @click="${this.clickHandler}">submit</button>
                
                
                
               
                
            </dialog>
                
            <button class="cursus-button" @click="${this.openDialog}">voeg cursus toe</button>
        `;
    }



    openDialog() {
        this.shadowRoot.querySelector("#oudeCursusDialog").showModal()
    }

    closeDialog() {
        this.shadowRoot.querySelector("#oudeCursusDialog").close()
    }


    clickHandler() {
        var code = this.shadowRoot.querySelector('#cursus-code').value;
        var naam = this.shadowRoot.querySelector('#cursus-naam').value;
        var ec = this.shadowRoot.querySelector('#ec-cursus').value;
        var bezemConversie = this.shadowRoot.querySelector('#bezem-conversie').value;

        var toetsen = ["toets1"]
        var nieuweCursussen = ["cursus1"]

        this.addCursus(code,naam,ec,bezemConversie,toetsen,nieuweCursussen);
    }




    addCursus(code, naam, ec, bezemConversie, toetsen, nieuweCursussen ) {

            // the user has entered a value within the textfield
            const newCursus = new Cursus(code, naam, ec, bezemConversie, null, null, null, null, null, true, toetsen);
            this.cursusService.addCursus(newCursus)
            console.log(newCursus)






    }

}

customElements.define('add-oude-cursus', addOudeCursus)

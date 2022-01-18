import {css, html, LitElement} from "lit";


class addOudeCursus extends LitElement {

    constructor() {
        super();

    }

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
            width: 10px;
            height: 10px;
            padding: 5px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
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

    render(){
        return html`
            
                
            <dialog id="oudeCursusDialog">
                <h2>Voer oude Cursus in</h2>
                
                <label for="cursus-code"></label>
                <input type="text" class="maakCursus" id="cursus-code" name="cursus-code" placeholder="Cursus Code">
                <label for="cursus-naam"></label>
                <input type="text" class="maakCursus" id="cursus-naam" name="cursus-naam" placeholder="Cursus Naam">
                <label for="ec-cursus"></label>
                <input type="number" class="maakCursus" step="0.5" id="ec-cursus" name="aantal-ec-voor-cursus" placeholder="EC-Cursus">
                <label for="bezem/conversie"></label>
                <select id="bezem/conversie" class="maakCursus" name="bezem-of-conversie" >
                    <option value="" disabled selected hidden>bezem/conversie</option>
                    <option>bezem</option>
                    <option>conversie</option>
                </select>






                <toetsen-list></toetsen-list>
                <add-toets></add-toets>
                <menu id="knoppen-oude-cursus">
                    
                    
                    <cursussen-list></cursussen-list>
                    <add-nieuwe-cursus></add-nieuwe-cursus>
                    <mwc-button class="cursus-button" >cancel</mwc-button>
                    <mwc-button class="cursus-button" >submit</mwc-button>
                </menu>
               
                
            </dialog>
                
            <mwc-button class="cursus-button"  @click="${this.openDialog}" raised>voeg cursus toe</mwc-button>
        `;
    }



    openDialog() {
        this.shadowRoot.querySelector("#oudeCursusDialog").showModal()
    }


}

customElements.define('add-oude-cursus', addOudeCursus)

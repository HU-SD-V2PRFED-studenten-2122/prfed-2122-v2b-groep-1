import {css, html, LitElement} from "lit";


class addNieuweCursus extends LitElement {

    constructor() {
        super();

    }

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
    
     `;

    render(){
        return html`


            <dialog id="nieuweCursusDialog">
                <h2>Voer nieuwe Cursus in</h2>
                <div id="oude-cursus">
                    <label for="cursus-code"></label>
                    <input type="text" id="cursus-code" class="maakCursus" name="cursus-code" placeholder="Cursus Code">
                    <label for="cursus-naam"></label>
                    <input type="text" class="maakCursus" id="cursus-naam" name="cursus-naam" placeholder="Cursus Naam">
                    <label for="ec-cursus"></label>
                    <input type="number" class="maakCursus" step="0.5" id="ec-cursus" name="aantal-ec-voor-cursus" placeholder="EC-cursus">
                    <label for="cursus-coordinator"></label>
                    <input type="text" class="maakCursus" id="cursus-coordinator" name="cursus-coordinator" placeholder="cursus coördinator">

                    <p>blok</p>
                    <label for="blok-a">A</label>
                    <input type="checkbox" id="blok-b" name="blok-a" value="A">
                    <label for="blok-b">B</label>
                    <input type="checkbox" id="blok-b" name="blok-b" value="B">
                    <label for="blok-c">C</label>
                    <input type="checkbox" id="blok-c" name="blok-c" value="B">
                    <label for="blok-d">D</label>
                    <input type="checkbox" id="blok-d" name="blok-d" value="A">
                    <label for="blok-e">E</label>
                    <input type="checkbox" id="blok-e" name="blok-e" value="A">
                
                </div>
                
                
                <div>
                    <toetsen-list></toetsen-list>
                    <add-toets></add-toets>
                </div>
                
                
               
                
                <menu>
                    <mwc-button class="cursus-button"  @click="${this.closedialog}" raised>cancel</mwc-button>
                    <mwc-button class="cursus-button"  @click="${this.closedialog}" raised>add cursus</mwc-button>
                </menu>
                
                
            </dialog>

            <mwc-button class="cursus-button"  @click="${this.openDialog}" raised>voeg cursus toe</mwc-button>
            

            
           
            
        `;
    }

    closedialog() {
        this.shadowRoot.querySelector("#nieuweCursusDialog").close()
    }

    openDialog() {
        this.shadowRoot.querySelector("#nieuweCursusDialog").showModal()
    }



}

customElements.define('add-nieuwe-cursus', addNieuweCursus)

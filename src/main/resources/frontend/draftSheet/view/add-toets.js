import {css, html, LitElement} from "lit";


class addToets extends LitElement {

    constructor() {
        super();

    }

    static styles = css`
    
        
        
        #add-toets {
            width: 90%;
            height: 200px;
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
        
        #add-team-button {
           
            margin-left: 80%;
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
        
        #add-team-button:hover {
            background-color: grey;
        }
            
            
            
    
     `;

    render(){
        return html`
            
            
            
                    
            <div id="add-toets">
                <h3>Voeg toets toe</h3>
                <label for="toets-naam"></label>
                <input type="text" class="maakCursus" id="toets-naam" name="toets-naam" placeholder="Naam Toets">
                <label for=" "></label>
                <input type="text"  class="maakCursus" id="cursus-naam" name="cursus-naam" placeholder="Naam Cursus">
                <label for="ec-cursus"></label>
                <input type="number" class="maakCursus" id="ec-cursus" name="aantal-ec-voor-cursus" placeholder="Aantal EC">
                <mwc-button id="add-team-button">add toets</mwc-button>
            </div>
                
            
        `;
    }


    clickHandler(e) {
        this.opendialog()

    }

    opendialog() {
        this.shadowRoot.querySelector("#cursusDialog").showModal()
    }



}

customElements.define('add-toets', addToets)

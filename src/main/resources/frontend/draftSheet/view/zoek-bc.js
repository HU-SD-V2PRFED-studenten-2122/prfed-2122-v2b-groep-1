import { LitElement, html, css } from "lit";

export class ZoekBc extends LitElement {

    static styles = css`
    
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


    constructor() {
        super();

    }

    render(){
        return html`
            <label>
                <label for="zoek-balk">Zoek in de bezem/conversie sheet.</label>
                <input type="text" id="zoek-balk" name="zoekbalk-bezem-conversie-sheet">
                <button id="zoek-knop" name="zoek-knop">Zoek</button>
            </label>
        `;
    }

}


customElements.define('zoeken-bc-lijst', ZoekBc);

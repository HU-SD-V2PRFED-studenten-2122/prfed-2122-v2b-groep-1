import { LitElement, html, css } from "lit";
import {ZoekBc} from "./zoek-bc";

export class BcLijst extends LitElement {


    static styles = css`
    
    table, th, td {
        border:1px solid black;
        padding: 10px;
        margin: 40px;
    }
    
    th {
        background-color: grey;
    }
       
       
  `;


    constructor() {
        super();

    }

    render(){
        return html`
            <table>
                
                <tr>
                    <th>wgeing</th>
                    <th>ec-toets</th>
                    <th>Ec-cursus</th>
                    <th>toets & toetsvorm</th>
                    <th>weging</th>
                    <th>ec-toets</th>
                    <th>bezem/conversie</th>
                    <th>nieuwe code</th>
                    <th>naam</th>
                    <th>ec-cursus</th>
                    <th>toets & toetsvorm</th>
                    <th>weging</th>
                    <th>ec-toets</th>
                    <th>periode</th>
                    <th>coordinator</th>
                    <th>opmerkingen</th>
                </tr>
                <tr>
                    <div contenteditable>

                        <td>wgeing</td>
                        <td>ec-toets</td>
                        <td>Ec-cursus</td>
                        <td>toets & toetsvorm</td>
                        <td>weging</td>
                        <td>ec-toets</td>
                        <td>bezem/conversie</td>
                        <td>nieuwe code</td>
                        <td>naam</td>
                        <td>ec-cursus</td>
                        <td>toets & toetsvorm</td>
                        <td>weging</td>
                        <td>ec-toets</td>
                        <td>periode</td>
                        <td>coordinator</td>
                        <td>opmerkingen</td>
                        
                    </div>
                </tr>
            </table>
        `;
    }
}

customElements.define('bc-lijst', BcLijst);

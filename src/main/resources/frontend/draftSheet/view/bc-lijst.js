import { LitElement, html, css } from "lit";
import {ZoekBc} from "./zoek-bc";

export class BcLijst extends LitElement {


    static styles = css`
    table, th, td {
    border:1px solid black;
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
                    <td>wgeing1</td>
                    <td>ec-toets1</td>
                    <td>Ec-cursus1</td>
                    <td>toets & toetsvorm<1/td>
                    <td>wegin1g</td>
                    <td>ec-toets1</td>
                    <td>bezem/conversie1</td>
                    <td>nieuwe code1</td>
                    <td>naam1</td>
                    <td>ec-cursus1</td>
                    <td>toets & toetsvorm1</td>
                    <td>weging1</td>
                    <td>ec-toets1</td>
                    <td>periode1</td>
                    <td>coordinator1</td>
                    <td>opmerkingen1</td>
            </table>
        `;
    }
}

customElements.define('bc-lijst', BcLijst);

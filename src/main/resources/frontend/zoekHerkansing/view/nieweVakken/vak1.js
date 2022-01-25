import {css, html, LitElement} from "lit";

class Vak1 extends LitElement{
    constructor() {
        super();
    }


    showDiv() {
        console.log("showDiv")
        this.shadowRoot.getElementById("divVak1").removeAttribute("hidden");
    }

    render() {
        return html `

            <div  id="divVak1" hidden >
                <h1>Nieuwe Cursus Data In Div</h1>
                <button @click="${this.showDiv}">Try it</button>

                <table class="newVakData">
                    <tr>
                        <th>Bezem/Conversie</th>
                        <th>Niewe Code</th>
                        <th>Naam</th>
                        <th>EC-cursus</th>
                        <th>Toets en Toetsvorm</th>
                        <th>Weging</th>
                        <th>EC-toets</th>
                        <th>Periode</th>
                        <th>Programmaleider</th>
                        <th>Opmerking</th>
                    </tr>
                    <tr>
                        <td>Bezem</td>
                        <td>MBBU-H-ISTRAM-19</td>
                        <td>Inleiding strategisch management</td>
                        <td>10</td>
                        <td>TOETS1-Tentamen ISTRAM-COMPUTER <br>
                            TOETS2-Essay ISTRAM-VERSLAG <br>
                            TOETS3-Presentatie advies ISTRAM-PRESENTATIE
                        </td>
                        <td>50 <br>30 <br>20 <br>
                        </td>
                        <td>5 <br>3 <br> 2</td>
                        <td>B.C</td>
                        <td>meinder.scholma@hu.nl</td>
                        <td></td>

                    </tr>
                </table>
                <button @click="${this.hideDiv}">Try it</button>

            </div>
        `
    }

    static get styles(){
        return css`
        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Kumb Sans', sans-serif;
            scroll-behavior: smooth;
        
        }
        
        .hero {
            background: #e9e2e2;
            background: linear-gradient(to right, #f5d7d7, #c5e1f3);
            padding: 10px 0;
        }
        .hero__container {
            display: flex;
            flex-direction: column;
            max-width: 1000px;
            margin: 0 auto;
            height: 90%;
            padding: 30px;
        }
          .newVakData {        
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
          
        }  
        .newVakData td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        
        .newVakData tr:nth-child(even) {
          background-color: #dddddd;
        }
        `;
    }
}

customElements.define('vak-1', Vak1);

import { LitElement, html, css } from "lit";

class Kop1819 extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
        h1 {
            text-align: center;
            text-decoration: underline;
            font-weight: 800;
            padding-top: 0;
            margin-top: 10px;
        }

        button {
            height: 10%;
            width: 12%;
            margin-top: 0.4%;
            margin-bottom: auto;
            background-color: white;
            border-radius: 5px;
            border-color: black;
            border-width: 4px;
            font-size: xxx-large;
            font-weight: bolder;
            cursor: pointer;
        } button:hover {
              background-color: #dddddd;
              transition-duration: 0.5s;
        }

        button.terug {
            float: left;
            margin-left: 12%;
        }

        button.verder {
            float: right;
            margin-right: 12%;
        }
    `;

    render() {
        return html`
            <button class="terug" onclick="openPopup()"><</button>
            
            <form action="http://localhost:8000/src/main/resources/frontend/2019-2020.html">
                <button class="verder">></button>
            </form>

            <h1>Jaaropgave 2018-2019</h1>
        `;
    }
}

customElements.define('kop-1819', Kop1819);
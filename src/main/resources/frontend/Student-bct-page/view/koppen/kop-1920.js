import { LitElement, html, css } from "lit";

class Kop1920 extends LitElement {
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
            <form action="http://localhost:8000/src/main/resources/frontend/2018-2019.html">
                <button class="terug"><</button>
            </form>
            
            <form action="http://localhost:8000/src/main/resources/frontend/2020-2021.html">
                <button class="verder">></button>
            </form>

            <h1>Jaaropgave 2019-2020</h1>
        `;
    }
}

customElements.define('kop-1920', Kop1920);
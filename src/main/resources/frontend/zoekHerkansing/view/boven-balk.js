import {css, html, LitElement} from "lit";

class BovenBalk extends LitElement {

    constructor() {
        super();

    }

    static styles = css`
    
            #boven-balk {
                overflow: hidden;
                background-color: white;
                border: 6px solid white;
                font-family: Avenir LT W01_85 Heavy1475544,Avenir,Arial,sans-serif;
            }
            
            a {
                padding-top: 10px;
                padding-bottom: 5px;
                font-size: 20px;
                text-align: center;
                color: black;
                text-decoration: none;
                border: 4px solid white;
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                border-radius: 5px;
                float: left;
                margin-left: 20px;
            }
            
            #log-uit {
                float: right;
                margin-top: 15px;
            }
            
            #sheets-link {
                margin-top: 15px;
            }
            
            #boven-balk a:hover {
                border-bottom-color: #00a1e1;
            }
        `;

    render(){
        return html`
            <div id="boven-balk">
                <a id="hu-logo" href="/src/main/resources/frontend/index.html"><img height="60" width="180"
                                                                                    src="../fotos/hogeschool-utrecht-logo.png"
                                                                                    alt="hu-logo"></a>
                <a id="sheets-link" href="/src/main/resources/frontend/2020-2021.html">B/C Sheets</a>
                <a id="sheets-link" href="/src/main/resources/frontend/draft.html">Draft</a>
                <a id="log-uit" href="../../../../../../../../login.html">Log uit</a>
            </div>
        `;
    }
}

customElements.define('boven-balk', BovenBalk)

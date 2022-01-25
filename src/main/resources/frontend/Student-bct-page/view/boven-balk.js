import {css, html, LitElement} from "lit";

class BovenBalk extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
    
            #boven-balk {
                overflow: hidden;
                border: 6px solid none;
                font-family: Avenir LT W01_85 Heavy1475544,Avenir,Arial,sans-serif;
                height: 90px;
            }
            
            a {
                padding-top: 10px;
                padding-bottom: 5px;
                font-size: 20px;
                text-align: center;
                color: black;
                text-decoration: none;
                border: 4px solid none;
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                border-radius: 5px;
                float: left;
                margin-left: 20px;
            }
            
            #log-in {
                float: right;
                margin-top: 15px;
            }
            
            #sheets-link {
                margin-top: 15px;
            }
            
            #boven-balk a:hover {
                transition-duration: 0.1s;
            }
            
            #hu-logo:hover, #sheets-link:hover {
                border-bottom: 4px solid #00a1e1;
            }
            
            #log-in:hover {
                border-bottom: 4px solid #df2e2a;
            }
        `;

    render(){
        return html`
            <div id="boven-balk">
                <a id="hu-logo" href="/src/main/resources/frontend/index.html"><img height="60" width="180"
                                                                                    src="../fotos/hogeschool-utrecht-logo.png"
                                                                                    alt="hu-logo"></a>
                <a id="sheets-link" href="/src/main/resources/frontend/2021-2022.html">B/C Sheets</a>
                <a id="sheets-link" href="/src/main/resources/frontend/login.html">Draft</a>
                <a id="log-in" class="uitloggen" href="/src/main/resources/frontend/login.html">Login</a>
            </div>
        `;
    }
}

customElements.define('boven-balk', BovenBalk)

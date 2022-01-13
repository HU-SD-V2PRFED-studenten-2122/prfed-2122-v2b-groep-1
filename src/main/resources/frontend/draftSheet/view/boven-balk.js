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
            
            #login-knop {
                padding-top: 10px;
                padding-bottom: 5px;
                border: 4px solid white;
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                border-radius: 5px;
                float: right
            }
            
            #boven-balk a {
                font-size: 20px;
                text-align: center;
                color: black;
                text-decoration: none;
            }
            
            #login-knop:hover {
                border-bottom-color: #00a1e1;
            }
        `;

    render(){
        return html`
            <div id="boven-balk">
                <a id="hu-logo" href="../../index.html"><img height="60" width="180" src="../fotos/hogeschool-utrecht-logo.png" alt="hu-logo"></a>
                <a id="login-knop" href="../../login.html">Login</a>
            </div>
        `;
    }
}

customElements.define('boven-balk', BovenBalk)
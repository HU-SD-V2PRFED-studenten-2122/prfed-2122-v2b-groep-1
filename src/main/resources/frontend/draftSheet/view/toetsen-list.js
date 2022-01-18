import {css, html, LitElement} from "lit";


class toetsenList extends LitElement {

    constructor() {
        super();

    }

    static styles = css`
            
 
            li {
                border-radius: 5px;
                border-style: groove;
                display: inline;
                background-color: #cfcdcd;
                margin-left: 1px;
                font-size: small;
            }
            
            .close {
               margin-left: 20px;
            }
            
            
        
     `;

    render(){
        return html`
            <p>toetsen</p>
            <ul id="toetsen-list">
                <li>toets1<mwc-span @click="${this.removeLi}" class="close">x</mwc-span></li>
                <li>toets2<mwc-span @click="${this.removeLi}" class="close">x</mwc-span></li>
            </ul>
        `;
    }

    removeLi() {
        console.log("a")
    }

}

customElements.define('toetsen-list', toetsenList )

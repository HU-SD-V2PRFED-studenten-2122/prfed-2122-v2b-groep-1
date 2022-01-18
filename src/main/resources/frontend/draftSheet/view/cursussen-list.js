import {css, html, LitElement} from "lit";


class cursussenList extends LitElement {

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
            <p>cursussen</p>
            <ul id="toetsen-list">
                <li>cursus1<mwc-span @click="${this.removeLi}" class="close">x</mwc-span></li>
                <li>cursus2<mwc-span @click="${this.removeLi}" class="close">x</mwc-span></li>
            </ul>
        `;
    }

    removeLi() {
        console.log("a")
    }

}

customElements.define('cursussen-list', cursussenList )

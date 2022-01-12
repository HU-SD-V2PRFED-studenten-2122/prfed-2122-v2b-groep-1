import { LitElement, html, css } from "lit";

export class ZoekBc extends LitElement {

    static styles = css`
    
    
  `;


    constructor() {
        super();

    }

    render(){
        return html`
            <label>
                <p>zoek bezem/conversievak</p>
                <input type="text">
            </label>
        `;
    }

}


customElements.define('zoeken-bc-lijst', ZoekBc);

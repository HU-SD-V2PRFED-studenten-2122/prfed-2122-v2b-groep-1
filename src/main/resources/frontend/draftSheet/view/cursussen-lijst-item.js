import { LitElement, html, css } from "lit";
import {CursusService} from "../../service/CursusService";


export class CursussenLijstItem extends LitElement {
    static styles = css`
    mwc-icon {
      vertical-align: 30%;
    }
    div:hover{
      background-color: yellow;
    }
    
    li {
        border-radius: 5px;
        order-style: groove;
        display: inline;
        background-color: #cfcdcd;
        margin-left: 1px;
        font-size: small;
    }
            
    .close {
        margin-left: 20px;
     }
     
     .visually-hidden {
            display: none;
        }
     
  `;

    static properties = {
        cursusNaam: {
            type: String
        },
        oldCursusId: {
            type: String
        },
        newCursusId: {
            type: String
        }
    };

    constructor() {
        super();
        this.cursusService = new CursusService();
    }

    render() {
        return html`
            <li><a href="#">${this.cursusNaam}<a href="#" @click="${this.delete}" class="close">x<span class="visually-hidden">verwijder lijst item</span></a></a></li>

        `;
    }

    delete() {

        this.cursusService.deleteCursus(this.newCursusId);
        this.cursusService.deleteNewCursus(this.oldCursusId, this.newCursusId);

    }
}

customElements.define('cursus-item', CursussenLijstItem);

import { LitElement, html, css } from "lit";
import {ToetsService} from "../service/ToetsService";
import {CursusService} from "../service/CursusService";


export class nieuweToetsItem extends LitElement {
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
  `;

    static properties = {
        toetsId: {
            type: String
        },
        toetsNaam: {
            type: String
        },
        cursusId: {
            type: String
        }
    };



    constructor() {
        super();
        this.toetsService = new ToetsService();
        this.cursusService = new CursusService();
    }

    render() {
        return html`
            <li>${this.toetsNaam}<span @click="${this.delete}" class="close">x</span></li>
        `;
    }

    delete() {
        this.toetsService.deleteToets(this.toetsId);
        this.cursusService.deletetoetsCursus(this.cursusId, this.toetsId)


    }
}

customElements.define('nieuw-toets-item', nieuweToetsItem);

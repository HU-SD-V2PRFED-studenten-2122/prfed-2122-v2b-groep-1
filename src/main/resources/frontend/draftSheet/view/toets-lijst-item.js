import { LitElement, html, css } from "lit";
import {ToetsService} from "../../service/ToetsService";
import {CursusService} from "../../service/CursusService";


export class ToetsLijstItem extends LitElement {
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
            <li><a href="#">${this.toetsNaam}<a href="#" @click="${this.delete}" class="close">x<span class="visually-hidden">verwijder lijst item</span></a></a></li>
        `;
    }

    delete() {
        this.toetsService.deleteToets(this.toetsId);
        this.cursusService.deletetoetsCursus(this.cursusId, this.toetsId)


    }
}

customElements.define('toets-item', ToetsLijstItem);

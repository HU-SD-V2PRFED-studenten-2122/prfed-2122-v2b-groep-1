import { LitElement, html, css } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../service/Appservice';


export class toetsenList extends connect(store)(LitElement) {

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


    static get properties() {
        return {
            toetsen: {
                type: Array
            },
            cursusId: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.toetsen = []
        this.cursusId = ''
    }

    stateChanged(state) {
        let cursussen;
        cursussen = state.courseReducer.courses;
        cursussen.map( (cursus) => {
            if (cursus.id === this.cursusId) {
                this.toetsen = cursus.toetsen
            }
        })
    }

    render(){
        if (this.toetsen != null) {
            return html`
                <p>toetsen</p>
                <div>
                    ${
                            this.toetsen.map((toets) => {
                                return html`<toets-item toetsId="${toets.id}" toetsNaam="${toets.naamToets}" cursusId="${this.cursusId}" }></toets-item>`
                            })
                    }
                </div>
            `;
        }
    }
}


customElements.define('toetsen-list', toetsenList )

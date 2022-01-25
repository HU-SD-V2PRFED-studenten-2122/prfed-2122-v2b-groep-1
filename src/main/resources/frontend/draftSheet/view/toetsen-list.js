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
            
            .visually-hidden {
            display: none;
        }
     `;


    static get properties() {
        return {
            toetsen: {
                type: Array
            },
            cursusId: {
                type: String
            },
            courses: {
                type: Array
            }
        }
    }

    constructor() {
        super();
        this.toetsen = []
        this.cursusId = ''
    }

    stateChanged(state) {
        this.courses = state.courseReducer.courses;
        this.courses.map( (cursus) => {
            if (cursus.id === this.cursusId) {
                this.toetsen = cursus.toetsen
            }
        })
        if (this.shadowRoot.querySelector("#lijst-toetsen") !== null && this.toetsen!== null) {
            if (this.toetsen.length > 0) {
                this.shadowRoot.querySelector("#lijst-toetsen").removeAttribute("hidden")
            } else {
                this.shadowRoot.querySelector("#lijst-toetsen").setAttribute("hidden" , true)
            }

        }



    }

    render(){
        if (this.toetsen != null) {
            return html`
                <label id="lijst-toetsen" hidden>
                    Toetsen:<span class="visually-hidden">lijst met toetsen</span>
                    <div>
                        ${
                                this.toetsen.map((toets) => {

                                    return html`<toets-item toetsId="${toets.id}" toetsNaam="${toets.naamToets}" cursusId="${this.cursusId}" }></toets-item>`
                                })
                        }
                    </div>
                </label>
                
            `;
        }
    }
}


customElements.define('toetsen-list', toetsenList )

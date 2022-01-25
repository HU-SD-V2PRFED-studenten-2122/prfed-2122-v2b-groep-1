import { LitElement, html, css } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../service/Appservice';


export class nieuweToetsenLijst extends connect(store)(LitElement) {

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
            
            .lijst {
                display: block
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
        this.courses = []
    }

    stateChanged(state) {

        this.courses = state.courseReducer.courses;
        console.log(this.courses)
        this.courses.map( (cursus) => {
            if (cursus.id === this.cursusId) {
                console.log(cursus.toetsen)
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
        console.log(this.toetsen)
    }

    render(){

        if (this.toetsen != null) {
            return html`
                <div id="lijst">
                    <label id="lijst-toetsen" hidden>
                        Toetsen:<span class="visually-hidden">lijst met toetsen</span>

                        <div>
                            ${
                                    this.toetsen.map((toets) => {
                                        return html`<nieuw-toets-item toetsId="${toets.id}" toetsNaam="${toets.naamToets}" cursusId="${this.cursusId}" }></nieuw-toets-item>`
                                    })
                            }
                        </div>
                    </label>
                </div>
                
                `;
        }
    }



}

customElements.define('nieuwe-toetsen-list', nieuweToetsenLijst  )

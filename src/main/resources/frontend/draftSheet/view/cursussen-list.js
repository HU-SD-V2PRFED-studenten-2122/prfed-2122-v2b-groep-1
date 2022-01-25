import {css, html, LitElement} from "lit";
import { connect } from 'pwa-helpers';
import { store } from '../service/Appservice';
import {AddOudeCursus} from "./AddOudeCursus";

class cursussenList extends connect(store) (LitElement) {

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
            courses: {
                type: Array
            },
            oldCursusId: {
                type: String
            },
            allcourses: {
                type: Array
            }
        }
    }

    constructor() {
        super();
        this.courses = []

    }

    stateChanged(state) {
        this.allcourses = state.courseReducer.courses;
        this.allcourses.map( (cursus) => {
            if (cursus.id === this.oldCursusId) {

                this.courses = cursus.nieuweCursussen
            }
        })

        if (this.shadowRoot.querySelector("#new-cursussen") !== null && this.courses!== null) {
            if (this.courses.length > 0) {
                this.shadowRoot.querySelector("#new-cursussen").removeAttribute("hidden")
            } else {
                this.shadowRoot.querySelector("#new-cursussen").setAttribute("hidden" , true)
            }

        }


    }

    render(){

        if (this.courses != null) {
            return html`
                <label id="new-cursussen" hidden>
                    Nieuwe Cursussen:<span class="visually-hidden">lijst met cursussen</span>
                    <div>
                        ${
                                this.courses.map((cursus) => {
                                    return html`<cursus-item cursusNaam="${cursus.naamCursus}" oldCursusId="${this.oldCursusId}" newCursusId="${cursus.id}" }></cursus-item>`
                                })
                        }
                    </div>
                </label>
                
        `;
        }




    }



}

customElements.define('cursussen-list', cursussenList )

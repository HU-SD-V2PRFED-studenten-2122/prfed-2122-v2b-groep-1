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
            
            
        
     `;


    static get properties() {
        return {
            courses: {
                type: Array
            },
            oldCursusId: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.courses = []

    }

    stateChanged(state) {
        var cursussen;
        cursussen = state.courseReducer.courses;
        cursussen.map( (cursus) => {

            if (cursus.id === this.oldCursusId) {
                this.courses = cursus.nieuweCursussen
            }
        })

    }

    render(){

        if (this.courses != null) {
            return html`
                <p>cursussen</p>
                <div>
                    ${
                this.courses.map((cursus) => { 
                    return html`<cursus-item cursusNaam="${cursus.naamCursus}" oldCursusId="${this.oldCursusId}" newCursusId="${cursus.id}" }></cursus-item>`
                })
            }
                </div>
        `;
        }




    }



}

customElements.define('cursussen-list', cursussenList )
